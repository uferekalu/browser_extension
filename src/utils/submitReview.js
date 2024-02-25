export function submitReview() {
  const selectedRating =
    document.getElementById('star-rating').dataset.selectedRating || '0'
  console.log('User rating:', selectedRating) // Replace with actual submission logic

  // Mark the review as submitted
  localStorage.setItem('reviewSubmitted', 'true')

  // Replace with your extension's Chrome Web Store URL
  const chromeWebStoreUrl =
    'https://chrome.google.com/webstore/detail/your-extension-id'

  // Open a new tab to the Chrome Web Store page
  chrome.tabs.create({ url: chromeWebStoreUrl })

  // Hide the review prompt after submission
  const reviewPrompt = document.getElementById('review-prompt')
  if (reviewPrompt) {
    reviewPrompt.remove() // This should remove the prompt from the page
  }
}
