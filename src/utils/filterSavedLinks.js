export function filterSavedLinks() {
  // Get the filter input element
  const filterInput = document.getElementById('filter-input')

  // Add an event listener for input changes
  filterInput.addEventListener('input', function () {
    const filterValue = this.value.toLowerCase()
    const folderList = document.getElementById('folders')
    const folders = folderList.querySelectorAll('.folder-item')
    const linksList = document.getElementById('content-display') // Assuming this is where links are displayed
    const links = linksList.querySelectorAll('.content-item')

    // Loop through all folders to hide or show them
    folders.forEach((folder) => {
      const text = folder.innerText.toLowerCase()
      if (text.includes(filterValue)) {
        folder.style.display = '' // Show
      } else {
        folder.style.display = 'none' // Hide
      }
    })

    // Loop through all links to hide or show them
    links.forEach((link) => {
      const text = link.innerText.toLowerCase()
      if (text.includes(filterValue)) {
        link.style.display = '' // Show
      } else {
        link.style.display = 'none' // Hide
      }
    })
  })
}
