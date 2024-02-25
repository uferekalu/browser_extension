export function isCursorOverElement(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.left <= event.clientX &&
    event.clientX <= rect.right &&
    rect.top <= event.clientY &&
    event.clientY <= rect.bottom
  )
}
