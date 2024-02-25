export function highlightStars(event) {
  const rating = event.target.dataset.value
  document.querySelectorAll('#star-rating .star').forEach((star) => {
    star.style.color = star.dataset.value <= rating ? 'gold' : 'gray'
  })
}
