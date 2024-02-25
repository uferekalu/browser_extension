import { showReviewPrompt } from "./showReviewPrompt"

//rating code
export function incrementLinkCounterAndCheckForReview() {
  let linkCounter = parseInt(localStorage.getItem('linkCounter')) || 0
  linkCounter++
  localStorage.setItem('linkCounter', linkCounter.toString())

  // Check for review prompt conditions
  const reviewSubmitted = localStorage.getItem('reviewSubmitted') === 'true'
  if (
    !reviewSubmitted &&
    (linkCounter === 5 || linkCounter === 20 || linkCounter === 48)
  ) {
    showReviewPrompt()
  }
}
