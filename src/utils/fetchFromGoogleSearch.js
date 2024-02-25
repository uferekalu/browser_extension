

// Background Script

function showLoadingScreen() {
  document.querySelector('.load__spinner').style.display = 'flex';
  document.querySelector('.google__search').style.display = 'none';
  document.querySelector('.search-btn').disabled= true;
}


function hideLoadingScreen() {
  document.querySelector('.load__spinner').style.display = 'none';
  document.querySelector('.google__search').style.display = 'flex';
  document.querySelector('.search-btn').disabled= false;


}
export async function fetchFromGoogleSearch(query, maxResults = 40,isClicked) {
  const apiKey = process.env.API_KEY; // Replace with your actual API key
  const searchEngineId = process.env.SEARCH_ENGINE_ID; // Replace with your actual search engine ID
  let startIndex = 1;
  let remainingResults = maxResults;

  const results = [];

  while (remainingResults > 0) {
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(
      query,
    )}&start=${startIndex}&num=${Math.min(10, remainingResults)}`;

    try {
    showLoadingScreen();
      const response = await fetch(url);

      if (!response.ok) {
        console.error(`HTTP error, status = ${response.status}`);
      hideLoadingScreen();

        return null;
      }

      const data = await response.json();
      hideLoadingScreen();
      if (data.items && data.items.length > 0) {
        // Add the items to the results array
        results.push(...data.items);

        // Update counters
        startIndex += data.items.length;
        remainingResults -= data.items.length;
      } else {
        // No more results
        break;
      }
    } catch (error) {
      hideLoadingScreen();
  
      return null;
    }
  }

  console.log("fetch from google", results);
  return results;
}

