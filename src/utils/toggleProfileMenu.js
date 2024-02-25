import { isCursorOverElement } from './isCursorOverElement'

export function toggleProfileMenu() {
  const profileImg = document.querySelector('.show__profile')
  const showdropdown = document.querySelector('.showdropdown')

  profileImg.addEventListener('mouseover', function () {
    showdropdown.classList.add('show')
  })
  profileImg.addEventListener('mouseout', function () {
    if (!isCursorOverElement(showdropdown)) {
      showdropdown.classList.remove('show')
    }
  })

  showdropdown.addEventListener('mouseover', function () {
    showdropdown.classList.add('show')
  })

  showdropdown.addEventListener('mouseout', function () {
    if (!isCursorOverElement(profileImg)) {
      showdropdown.classList.remove('show')
    }
  })
}
