export function dashboardSectionContentDetailsDiv() {
  const dashboardSectionContentHolder = document.querySelector(
    '.dashboardSectionContentHolder',
  )

  const dashboardSectionContentDetailsHTML = `<div class="dashboardSectionContentDetailsImgInfoHolder">
  <div class="dashboardSectionContentDetailsImg"></div>
  <div class="dashboardSectionContentDetailsInfo">
    <span class="dashboardSectionContentDetailsInfoTitle"
      >My first bookmark</span
    >
    <span class="dashboardSectionContentDetailsInfoDate"
      >Tue, Jan 2024</span
    >
    <span class="dashboardSectionContentDetailsInfoUrl"
      >www.google.com</span
    >
  </div>
</div>
<div class="dashboardSectionContentDetailsAction">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.3em"
    height="1.3em"
    viewBox="0 0 24 24"
    class="dashboardSectionContentDetailsActionEyeIcon"
  >
    <path
      fill="rgba(128, 123, 123, 1)"
      d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
    />
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.3em"
    height="1.3em"
    viewBox="0 0 24 24"
    class="dashboardSectionContentDetailsActionEditIcon"
  >
    <path
      fill="rgba(128, 123, 123, 1)"
      d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"
    />
    <path
      fill="rgba(128, 123, 123, 1)"
      d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"
    />
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.3em"
    height="1.3em"
    viewBox="0 0 26 26"
    class="dashboardSectionContentDetailsActionDeleteIcon"
  >
    <path
      fill="rgba(128, 123, 123, 1)"
      d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1zm2 2v12h2V10zm4 0v12h2V10zm4 0v12h2V10z"
    />
  </svg>
</div>`

  for (let i = 0; i < 3; i++) {
    const dashboardSectionContentDetails = document.createElement('div')
    dashboardSectionContentDetails.classList.add(
      'dashboardSectionContentDetails',
    )
    dashboardSectionContentDetails.innerHTML =
      dashboardSectionContentDetailsHTML
    dashboardSectionContentDetails.addEventListener('mouseover', function () {
      dashboardSectionContentDetails.style.backgroundColor =
        'rgba(244, 244, 244, 1)'
      const dashboardSectionContentDetailsAction = this.querySelector(
        '.dashboardSectionContentDetailsAction',
      )
      dashboardSectionContentDetailsAction.style.display = 'flex'
      const deleteIcon = this.querySelector(
        '.dashboardSectionContentDetailsActionDeleteIcon',
      )
      const deleteModal = document.querySelector('.deleteModal')
      const backdrop = document.querySelector('.backdrop')

      let isOpen = false
      deleteIcon.addEventListener('click', function () {
        dashboardSectionContentDetailsAction.style.display = 'flex'
        isOpen = !isOpen

        if (isOpen) {
          backdrop.classList.add('showBackdrop')
          deleteModal.classList.add('showDeleteModal')
        }
      })
      backdrop.addEventListener('click', function () {
        if (isOpen) {
          backdrop.classList.remove('showBackdrop')
          deleteModal.classList.remove('showDeleteModal')
          isOpen = false
        }
      })
    })
    dashboardSectionContentDetails.addEventListener('mouseout', function () {
      dashboardSectionContentDetails.style.backgroundColor =
        'rgba(255, 255, 255, 1)'
      const dashboardSectionContentDetailsAction = this.querySelector(
        '.dashboardSectionContentDetailsAction',
      )
      dashboardSectionContentDetailsAction.style.display = 'none'
    })
    dashboardSectionContentHolder.appendChild(dashboardSectionContentDetails)
  }
}
