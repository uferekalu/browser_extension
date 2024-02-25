import { authenticate } from '../utils/authentication'
import { backToHomepage } from '../utils/backToHomepage'
import { dashboard } from '../utils/dashboard'
import { displaySearchResults } from '../utils/displaySearchResults'
import { fetchAndRenderResults } from '../utils/fetchAndRenderResults'
import { fetchFromGoogleSearch } from '../utils/fetchFromGoogleSearch'
import { gpt } from '../utils/gpt'
import { gptResponse } from '../utils/gptResponse'
import { openProfile } from '../utils/openProfile'
import { renderPaginationButtons } from '../utils/renderPaginationButtons'
import { saveTab } from '../utils/saveTab'
import { shareAcrossSocials } from '../utils/shareAcrossSocials'
import { Tabs } from '../utils/tabs'
import { toggleProfileMenu } from '../utils/toggleProfileMenu'
import '@fortawesome/fontawesome-free/css/all.min.css'

// Content Script or Popup Script
chrome.runtime.sendMessage(
  { action: 'fetchGoogleSearch', query: 'some query' },
  function (response) {
    console.log(response)
  },
)

// Modify the listener to save the query when a search is made
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'fetchGoogleSearch') {
    fetchFromGoogleSearch(request.query).then((response) => {
      // Save the query after a successful fetch
      chrome.storage.local.set({ lastGoogleQuery: request.query }, () => {
        console.log('Query saved:', request.query)
      })
      sendResponse(response)
    })
    return true
  }
})

// Listener in Background Script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'fetchGoogleSearch') {
    fetchFromGoogleSearch(request.query).then(sendResponse)
    return true // Indicates to Chrome that sendResponse will be called asynchronously
  }
})

// Example usage
// fetchFromGoogleSearch('World Wide Web')

function openLink(url, openInNewTab) {
  if (openInNewTab) {
    chrome.tabs.create({ url })
  } else {
    chrome.tabs.update({ url })
  }
}

document.addEventListener('DOMContentLoaded', function () {
  fetchSavedQueryResults()
  // const openInNewTabCheckbox = document.getElementById('open-in-new-tab')
  const imgSearch = document.getElementById('submite')
  // const searchButton = document.getElementById('submite')
  const searchResultsDiv = document.getElementById('search-results')
  const paginationContainer = document.getElementById('pagination-container')

  let currentPage = 1

  imgSearch.addEventListener('dblclick', function () {
    searchResultsDiv.innerHTML = ''
  })

  imgSearch.addEventListener('click', async () => {
    let isClicked = true
    // if (!incrementSearchCounterAndCheckLimit()) {
    //   return
    // }

    const query = document.getElementById('google-search-input').value
    console.log('the query', query)

    await fetchAndRenderResults(query, currentPage, isClicked)
  })

  function incrementSearchCounterAndCheckLimit() {
    let searchCounter = parseInt(localStorage.getItem('searchCounter')) || 0
    searchCounter++
    localStorage.setItem('searchCounter', searchCounter.toString())

    if (searchCounter >= 300) {
      alert(
        'You have reached the maximum number of searches for free users. Please upgrade for unlimited searches.',
      )
      chrome.tabs.create({ url: 'https://oauife.edu.ng/' })
      return false
    }
    return true
  }

  // Retrieve the last saved page from storage
  chrome.storage.local.get('lastSavedPage', function (data) {
    if (data.lastSavedPage) {
      currentPage = data.lastSavedPage
    }
  })

  // When the popup is closed, save the current page to storage
  window.addEventListener('beforeunload', function () {
    chrome.storage.local.set({ lastSavedPage: currentPage })
  })
  backToHomepage()
  toggleProfileMenu()
  shareAcrossSocials()
  openProfile()
  saveTab()
  Tabs()
  gpt()
  gptResponse()
  dashboard()
  authenticate()
})

function fetchSavedQueryResults() {
  chrome.storage.local.get('lastGoogleResults', function (data) {
    if (chrome.runtime.lastError) {
      console.error(
        'Error retrieving data: ' + chrome.runtime.lastError.message,
      )
    } else {
      if (data && data.lastGoogleResults) {
        var results = JSON.parse(data.lastGoogleResults)
        console.log('Retrieved results:', results)
        displaySearchResults(results, 1, 5)
        // renderPaginationButtons(results.length, 1, 5)
      } else {
        console.log('No saved results found')
      }
    }
  })
}
