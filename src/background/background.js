console.log('Background.js is running.')

async function getOrCreateClientId() {
  const result = await chrome.storage.local.get('clientId')
  let clientId = result.clientId
  if (!clientId) {
    clientId = self.crypto.randomUUID()
    await chrome.storage.local.set({ clientId })
  }
  return clientId
}

const SESSION_EXPIRATION_IN_MIN = 30

async function getOrCreateSessionId() {
  let { sessionData } = await chrome.storage.session.get('sessionData')
  const currentTimeInMs = Date.now()
  if (sessionData && sessionData.timestamp) {
    const durationInMin = (currentTimeInMs - sessionData.timestamp) / 60000
    if (durationInMin > SESSION_EXPIRATION_IN_MIN) {
      sessionData = null
    } else {
      sessionData.timestamp = currentTimeInMs
      await chrome.storage.session.set({ sessionData })
    }
  }
  if (!sessionData) {
    sessionData = {
      session_id: currentTimeInMs,
      timestamp: currentTimeInMs,
    }
    await chrome.storage.session.set({ sessionData })
  }
  return sessionData.session_id
}

async function saveLastAction(actionName) {
  await chrome.storage.local.set({ lastAction: actionName })
  console.log(`Last action (${actionName}) saved.`)
}

const GA_ENDPOINT = 'https://www.google-analytics.com/mp/collect'
const MEASUREMENT_ID = `G-32V680BDDG`
const API_SECRET = `zCCe2hjwS7uiZe_R_4k2vg`
const DEFAULT_ENGAGEMENT_TIME_IN_MSEC = 100

// Event Tracking Function
async function trackEvent(eventName, eventParams = {}) {
  const clientId = await getOrCreateClientId()
  const sessionId = await getOrCreateSessionId()
  saveLastAction(eventName)
  const payload = {
    client_id: clientId,
    events: [
      {
        name: eventName,
        params: {
          session_id: sessionId,
          engagement_time_msec: DEFAULT_ENGAGEMENT_TIME_IN_MSEC,
          ...eventParams,
        },
      },
    ],
  }

  try {
    const response = await fetch(
      `${GA_ENDPOINT}?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
      },
    )

    if (!response.ok) {
      // Log the response status and status text if the request didn't succeed
      console.error(
        `GA request failed with status: ${response.status} ${response.statusText}`,
      )
    } else {
      console.log('GA request succeeded:', response)
    }
  } catch (error) {
    console.error('Failed to send event data to GA:', error)
  }
}

// Event Listeners or Function Calls

trackEvent('tab-btn_clicked', { id: 'tab-btn' })
trackEvent('submit_action', { formId: 'myForm' })
trackEvent('shareButton_clicked', { id: 'shareButton' })
trackEvent('shareExtension_used', { extensionName: 'QuickShare' })
trackEvent('open-in-new-tab_action')
trackEvent('fetchLatestSearchResults_action', { searchQuery: 'latest' })
trackEvent('lastSearchResults_retrieved', { searchQuery: 'previous' })

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.eventName && message.eventParams) {
    trackEvent(message.eventName, message.eventParams)
  }
})

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  await saveLastAction(request.action)

  switch (request.action) {
    case 'fetchGoogleSearch': // Ensure this matches exactly with the sent action
      FromGoogleSearch(request.query)
        .then((data) => sendResponse({ data }))
        .catch((error) => sendResponse({ error: error.message }))
      break

    case 'fetchLatestSearchResults':
      // ... fetchLatestSearchResults action handling ...
      break
    case 'fetchDuckDuckGo':
      // ... fetchDuckDuckGo action handling ...
      break
    case 'getActiveTabInfo':
      // ... getActiveTabInfo action handling ...
      break
    case 'saveSearchResults':
    case 'getSearchResults': // Assuming 'saveSearchResults' and 'getSearchResults' are related.
      if (request.results) {
        latestSearchResults = request.results
        sendResponse({
          message: 'Search results saved or retrieved successfully.',
        })
      } else {
        console.error('No results provided.')
        sendResponse({ error: 'No results provided.' })
      }
      break
    default:
      console.error('Unknown action:', request.action)
      sendResponse({ error: 'Unknown action.' })
      break
  }

  return true // Indicates that you wish to send a response asynchronously for all cases
})

let latestSearchResults = []

async function FromGoogleSearch(query) {
  // const url = `http://localhost:3000/bingProxy?q=${encodeURIComponent(query)}`;
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(
    query,
  )}`

  try {
    const response = await fetch(url)
    if (response.ok) {
      return await response.json()
    } else {
      console.error(`HTTP error, status = ${response.status}`)
      return null
    }
  } catch (error) {
    console.error(`An error occurred: ${error}`)
    return null
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'fetchGoogleSearch') {
    const query = request.query
    fetchFromGoogleSearch(query)
      .then((data) => sendResponse({ data }))
      .catch((error) => sendResponse({ error: error.message }))
    return true
  }

  if (request.action === 'getSearchResults') {
    if (request.results) {
      latestSearchResults = request.results
    } else {
      console.error('Results are undefined.')
    }
  } else if (request.action === 'fetchLatestSearchResults') {
    sendResponse({ results: latestSearchResults })
  } else if (request.action === 'fetchDuckDuckGo') {
    fetch(`http://localhost:3003/proxy?q=${encodeURIComponent(request.query)}`)
      .then((response) => response.json())
      .then((data) => sendResponse({ data }))
      .catch((error) => sendResponse({ error: error.message }))
    return true // Will respond asynchronously
  } else if (request.action === 'getActiveTabInfo') {
    async function getActiveTab() {
      try {
        const tabs = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        })
        const activeTab = tabs[0]
        return activeTab
      } catch (error) {
        console.error(error)
        return null
      }
    }

    getActiveTab().then((activeTab) => {
      if (activeTab) {
        sendResponse({ activeTab })
      } else {
        sendResponse({ error: 'Active tab is null or undefined.' })
      }
    })
    return true
  } else if (request.action === 'saveSearchResults') {
    if (request.results) {
      latestSearchResults = request.results
      sendResponse({ message: 'Search results saved successfully' })
    } else {
      console.error('No results provided to save.')
      sendResponse({ error: 'No results provided to save.' })
    }
    return true
  } else {
    console.error('Unknown action:', request.action)
    sendResponse({ error: 'Unknown action.' })
  }
})

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'renameFolder',
    title: 'Rename Folder',
    contexts: ['all'],
  })
  // Create a parent item
  chrome.contextMenus.create({
    id: 'sortFolders',
    title: 'Sort Folders',
    contexts: ['all'],
  })

  // Create children items for sorting options
  chrome.contextMenus.create({
    id: 'sortByName',
    title: 'Sort by Name',
    parentId: 'sortFolders',
    contexts: ['all'],
  })

  chrome.contextMenus.create({
    id: 'sortByCreated',
    title: 'Sort by Created',
    parentId: 'sortFolders',
    contexts: ['all'],
  })
  chrome.contextMenus.create({
    id: 'saveLink',
    title: 'Save Link to Extension',
    contexts: ['link'],
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'renameFolder') {
    // Send a message to the content script or popup to handle the renaming
    chrome.runtime.sendMessage({ action: 'triggerRenameFolder' })
  }
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'sortByName' || info.menuItemId === 'sortByCreated') {
    // Send a message to the content script or popup to handle the sorting
    chrome.runtime.sendMessage({
      action: 'changeSortMethod',
      method: info.menuItemId,
    })
  }
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log('Context menu clicked:', info)
  if (info.menuItemId === 'saveLink') {
    const linkToSave = info.linkUrl
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const currentTab = tabs[0]
      chrome.tabs.sendMessage(currentTab.id, { action: 'saveLink', linkToSave })
    })
  }
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'saveTabs') {
    saveTabs(function (success, message) {
      sendResponse({ success, message })
    })
    return true
  } else if (request.action === 'retrieveTabs') {
    retrieveTabs(function (savedTabs, error) {
      if (error) {
        sendResponse({ success: false, message: error })
      } else {
        sendResponse({ success: true, savedTabs })
      }
    })
    return true
  }
})

// Function to save tabs
function saveTabs(callback) {
  chrome.tabs.query({}, function (tabs) {
    const tabInfo = tabs.map((tab) => ({
      title: tab.title,
      url: tab.url,
    }))
    console.log('Tabs information saved', tabInfo)
    chrome.storage.local.set({ tabInformation: tabInfo }, function () {
      if (chrome.runtime.lastError) {
        console.error(
          'Error saving tabs information: ' + chrome.runtime.lastError.message,
        )
      } else {
        console.log('Tabs information successfully')
      }
    })
    callback(true, null)
  })
}

// Function to retrieve saved tabs
function retrieveTabs(callback) {
  chrome.storage.local.get('tabInformation', function (data) {
    if (chrome.runtime.lastError) {
      callback(
        null,
        'Error retrieving tabs: ' + chrome.runtime.lastError.message,
      )
    } else {
      const savedTabs = data.tabInformation || []
      callback(savedTabs, null)
    }
  })
}
