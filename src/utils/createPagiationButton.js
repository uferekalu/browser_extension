import { displaySearchResults } from './displaySearchResults'
import { fetchAndRenderResults } from './fetchAndRenderResults'

export function createPaginationButton(label, page) {
  const pageNumberDiv = document.createElement('div')
  pageNumberDiv.classList.add('pageNumber')
  pageNumberDiv.textContent = label
  pageNumberDiv.addEventListener('click', () => {
    const savedResultsContainer = document.getElementById('search-results')
    if (!savedResultsContainer) {
      fetchSavedResultsPage(page)
    } else {
      const query = document.getElementById('google-search-input').value
      fetchAndRenderResults(query, page)
    }
  })

  return pageNumberDiv
}

function fetchSavedResultsPage(page) {
  const resultsPerPage = 5
  const startIndex = (page - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage

  chrome.storage.local.get(['lastGoogleResults'], function (result) {
    if (result.lastGoogleResults && Array.isArray(result.lastGoogleResults)) {
      const paginatedResults = result.lastGoogleResults.slice(
        startIndex,
        endIndex,
      )
      displaySearchResults(
        { items: paginatedResults, isSavedResults: true },
        page,
        resultsPerPage,
      )
    }
  })
}
