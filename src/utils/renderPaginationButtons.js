import { displaySearchResults } from "./displaySearchResults";

export function renderPaginationButtons(totalResults, currentPage, resultsPerPage) {
  const paginationContainer = document.getElementById('pagination-container');
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  paginationContainer.innerHTML = '';

  if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      const pageNumberDiv = document.createElement('div');
      pageNumberDiv.classList.add('pageNumber');
      pageNumberDiv.textContent = i;
      pageNumberDiv.addEventListener('click', function () {
        console.log("pagenumber clicked", i);
        chrome.storage.local.get('lastGoogleResults', function (data) {
          if (chrome.runtime.lastError) {
            console.error('Error retrieving data: ' + chrome.runtime.lastError.message);
          } else {
            if (data && data.lastGoogleResults) {
              var results = JSON.parse(data.lastGoogleResults);
              console.log("result data", results);
              displaySearchResults(results, i, resultsPerPage); 
            } else {
              console.log('No saved results found');
            }
          }
        });
      });
      pageNumberDiv.disabled = i === currentPage;
      pageNumberDiv.style.cursor = i === currentPage ? 'not-allowed' : 'pointer';
      if (i === currentPage) {
        pageNumberDiv.classList.add('currentPageNumber');
      }
      paginationContainer.appendChild(pageNumberDiv);
    }
  }
}
