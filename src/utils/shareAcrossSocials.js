export function shareAcrossSocials() {
  // Share across social media
  const shareHolderDiv = document.querySelector('.shareHolder')
  const showDropdown = document.querySelector('.showdropdown')
  const backdrop = document.querySelector('.backdrop')
  const modal = document.querySelector('.shareModal')

  let isOpen = false

  shareHolderDiv.addEventListener('click', function () {
    console.log('Share div clicked')

    isOpen = !isOpen

    if (isOpen) {
      backdrop.classList.add('showBackdrop')
      modal.classList.add('showSharemodal')
      showDropdown.classList.remove('show')
    }
  })

  backdrop.addEventListener('click', function () {
    if (isOpen) {
      backdrop.classList.remove('showBackdrop')
      modal.classList.remove('showSharemodal')
      isOpen = false
    }
  })
}
