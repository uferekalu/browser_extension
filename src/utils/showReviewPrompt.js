import { highlightStars } from "./highlightStars"
import { selectRating } from "./selectRating"
import { submitReview } from "./submitReview"

export function showReviewPrompt() {
  const reviewPrompt = document.createElement('div')
  reviewPrompt.id = 'review-prompt'
  reviewPrompt.style.position = 'fixed'
  reviewPrompt.style.left = '0'
  reviewPrompt.style.right = '0'
  reviewPrompt.style.top = '0'
  reviewPrompt.style.bottom = '0'
  reviewPrompt.style.margin = 'auto'
  reviewPrompt.style.width = 'fit-content'
  reviewPrompt.style.height = 'fit-content'
  reviewPrompt.style.backgroundColor = 'white'
  reviewPrompt.style.padding = '20px'
  reviewPrompt.style.borderRadius = '5px'
  reviewPrompt.style.zIndex = '1000'
  reviewPrompt.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'
  reviewPrompt.style.display = 'flex'
  reviewPrompt.style.flexDirection = 'column'
  reviewPrompt.style.justifyContent = 'center'
  reviewPrompt.style.alignItems = 'center'

  // Assuming your document has a valid DOCTYPE, this will cover the entire viewport
  reviewPrompt.style.width = '100vw'
  reviewPrompt.style.height = '100vh'

  reviewPrompt.innerHTML = `
      <div style="text-align: center;">
        <h3>Thank you for using QuickSearch<sup>+<sup>!</h3>
        <p>We would love to hear your feedback. Please rate us:</p>
        <div id="star-rating" style="font-size: 24px;">
          ${[...Array(5)]
            .map(
              (_, i) =>
                `<span class="star" data-value="${
                  i + 1
                }" style="cursor: pointer; display: inline-block;">&#9733;</span>`,
            )
            .join('')}
        </div>
        <button id="submit-review" style="margin-top: 10px;">Submit Review</button>
      </div>
    `
  document.body.appendChild(reviewPrompt)

  // Add event listeners for the stars
  document.querySelectorAll('#star-rating .star').forEach((star) => {
    star.addEventListener('mouseenter', highlightStars)
    star.addEventListener('click', selectRating)
  })
  document
    .getElementById('submit-review')
    .addEventListener('click', submitReview)
}
