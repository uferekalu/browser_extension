export function selectRating(event) {
  const rating = event.target.dataset.value
  document.getElementById('star-rating').dataset.selectedRating = rating
}
