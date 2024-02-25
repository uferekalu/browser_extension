export function deleteModal() {
  const deleteIcons = document.querySelectorAll(
    '.dashboardSectionContentDetailsActionDeleteIcon',
  )
  const deleteModal = document.querySelector('.deleteModal')
  const backdrop = document.querySelector('.backdrop')

  let isOpen = false

  deleteIcons.forEach((icon) => {
    icon.addEventListener('click', function () {
      isOpen = !isOpen

      if (isOpen) {
        backdrop.classList.add('showBackdrop')
        deleteModal.classList.add('showDeleteModal')
      }
    })
  })

  backdrop.addEventListener('click', function () {
    if (isOpen) {
      backdrop.classList.remove('showBackdrop')
      deleteModal.classList.remove('showDeleteModal')
      isOpen = false
    }
  })
}
