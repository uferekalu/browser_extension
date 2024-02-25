export function authenticate() {
  const authenticationHolder = document.querySelector('.authenticationHolder')
  const authenticationModal = document.querySelector('.authenticationModal')
  const backdrop = document.querySelector('.backdrop')
  const showDropdown = document.querySelector('.showdropdown')
  const authenticationEmailPasswordLogin = document.querySelector(
    '.authenticationEmailPasswordLogin',
  )
  const authenticationEmailPasswordSignup = document.querySelector(
    '.authenticationEmailPasswordSignup',
  )
  const registerOption = document.querySelector('.registerOption')
  const registerOptionText = document.querySelector('.registerOptionText')
  const loginOption = document.querySelector('.loginOption')
  const loginOptionText = document.querySelector('.loginOptionText')

  let isOpen = false

  authenticationHolder.addEventListener('click', function () {
    isOpen = !isOpen
    if (isOpen) {
      backdrop.classList.add('showBackdrop')
      authenticationModal.classList.add('showAuthenticationModal')
      showDropdown.classList.remove('show')
    }
  })

  registerOptionText.addEventListener('click', function () {
    authenticationEmailPasswordLogin.style.display = 'none'
    authenticationEmailPasswordSignup.style.display = 'flex'
    registerOption.style.display = 'none'
    loginOption.style.display = 'block'
  })

  loginOptionText.addEventListener('click', function () {
    authenticationEmailPasswordLogin.style.display = 'flex'
    authenticationEmailPasswordSignup.style.display = 'none'
    registerOption.style.display = 'flex'
    loginOption.style.display = 'none'
  })

  backdrop.addEventListener('click', function () {
    if (isOpen) {
      backdrop.classList.remove('showBackdrop')
      authenticationModal.classList.remove('showAuthenticationModal')
      isOpen = false
    }
  })
}
