
const firstSetSelectors = {
    RESULT_SELECTOR: '#rso .MjjYud',
    TITLE_SELECTOR: 'h3',
    LINK_SELECTOR: 'a',
    IMAGE_SELECTOR: 'img',
    SNIPPET_SELECTORS: ['div.VwiC3b.yXK7lf']
  };
  
  const secondSetSelectors = {
    RESULT_SELECTOR: '#rso .MjjYud',
    TITLE_SELECTOR: 'h3',
    LINK_SELECTOR: 'a',
    IMAGE_SELECTOR: 'img',
    SNIPPET_SELECTORS: ['div.ITZIwc']
  };
  
  const thirdSetSelectors = {
    RESULT_SELECTOR: '#rso .TzHB6b',
    TITLE_SELECTOR: 'h3',
    LINK_SELECTOR: 'a',
    IMAGE_SELECTOR: 'img',
    SNIPPET_SELECTORS: ['div.VwiC3b.yXK7lf']
  };
  
  const forthSetSelectors = {
    RESULT_SELECTOR: '#rso .MjjYud',
    TITLE_SELECTOR: 'h3',
    LINK_SELECTOR: 'a',
    IMAGE_SELECTOR: 'img',
    SNIPPET_SELECTORS: ['div.cmlJmd']
  };
  
  
  chrome.runtime.sendMessage({ action: "fetchGoogleSearch", query: "some query" }, function(response) {
    console.log(response);
  });
  
  console.log('conceptScript.js is running.');
  
  function extractSearchResults() {
    const searchResults = [];
    const resultElements = document.querySelectorAll(firstSetSelectors.RESULT_SELECTOR + ', ' + secondSetSelectors.RESULT_SELECTOR + ', ' + thirdSetSelectors.RESULT_SELECTOR + ', ' + forthSetSelectors.RESULT_SELECTOR);
  
    resultElements.forEach((resultElement) => {
      let selectors;
  
      // Check for the existence of first set SNIPPET_SELECTOR
      if (firstSetSelectors.SNIPPET_SELECTORS.some(selector => resultElement.querySelector(selector))) {
        selectors = firstSetSelectors;
      }
      // Check for the existence of second set SNIPPET_SELECTOR
      else if (secondSetSelectors.SNIPPET_SELECTORS.some(selector => resultElement.querySelector(selector))) {
        selectors = secondSetSelectors;
      }  else if (thirdSetSelectors.SNIPPET_SELECTORS.some(selector => resultElement.querySelector(selector))) {
        selectors = thirdSetSelectors;
      }  else if (forthSetSelectors.SNIPPET_SELECTORS.some(selector => resultElement.querySelector(selector))) {
        selectors = forthSetSelectors;
      } else {
        // Handle the case where the resultElement doesn't match either set of selectors
        console.error('Unexpected resultElement:', resultElement);
        return;
      }
  
      const titleElement = resultElement.querySelector(selectors.TITLE_SELECTOR);
      const linkElement = resultElement.querySelector(selectors.LINK_SELECTOR);
      const imageElement = resultElement.querySelector(selectors.IMAGE_SELECTOR);
      const imageUrl = imageElement ? imageElement.src : null;
  
      let snippet = 'No description available';
      // Use the first matching snippet selector found in the array
      for (const snippetSelector of selectors.SNIPPET_SELECTORS) {
        const snippetElement = resultElement.querySelector(snippetSelector);
        if (snippetElement) {
          snippet = snippetElement.textContent.trim();
          break;
        }
      }
  
      if (titleElement && linkElement) {
        const title = titleElement.textContent.trim();
        const link = linkElement.href;
        searchResults.push({
          title,
          link,
          snippet,
          imageUrl,
        });
      }
    });
  
    return searchResults;
  }
  
  function handleNewSearchResults() {
    const searchResults = extractSearchResults();
    chrome.runtime.sendMessage({ action: 'saveSearchResults', results: searchResults }); 
  }
  
  
  window.addEventListener('load', function () {
    handleNewSearchResults();
    
   
    const targetNode = document.getElementById('rso');
    if (targetNode) {
      const config = { childList: true, subtree: true };
      const callback = function(mutationsList, observer) {
        for (const mutation of mutationsList) {
          if (mutation.type === 'childList') {
            handleNewSearchResults();
          }
        }
      };
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
    }
});
  
  
  
  
  
  
  
  
  
  
  
  