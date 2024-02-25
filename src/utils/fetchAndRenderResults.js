import { fetchFromGoogleSearch } from './fetchFromGoogleSearch'
import { renderSearchResults } from './renderSearchResults'

export async function fetchAndRenderResults(query, page) {
  const results = await fetchFromGoogleSearch(query)
  var resultsString = JSON.stringify(results)
  if (results) {
    chrome.storage.local.set({ lastGoogleResults: resultsString }, function () {
      if (chrome.runtime.lastError) {
        console.error('Error saving data: ' + chrome.runtime.lastError.message)
      } else {
        console.log('Data saved successfully')
      }
    })

    chrome.storage.local.get('lastGoogleResults', function (data) {
      if (chrome.runtime.lastError) {
        console.error(
          'Error retrieving data: ' + chrome.runtime.lastError.message,
        )
      } else {
        if (data && data.lastGoogleResults) {
          var results = JSON.parse(data.lastGoogleResults)
          renderSearchResults(results, page, 5)
        } else {
          console.log('No saved results found')
        }
      }
    })
  }
}
