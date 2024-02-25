import { addContentToFolder } from './addContentToFolder'
import { renderPaginationButtons } from './renderPaginationButtons'

export function displaySearchResults(results, currentPage, resultsPerPage) {
  const searchResultsDiv = document.getElementById('search-results')

  if (results && Array.isArray(results)) {
    searchResultsDiv.innerHTML = ''

    const startIndex = (currentPage - 1) * resultsPerPage
    const endIndex = startIndex + resultsPerPage

    results.slice(startIndex, endIndex).forEach((result) => {
      const resultItem = document.createElement('div')
      resultItem.classList.add('result-item')

      const contentDiv = document.createElement('div')
      contentDiv.classList.add('content-div')

      resultItem.addEventListener('click', function () {
        this.classList.add('clicked-result-item')
      })

      if (result.pagemap && result.pagemap.cse_thumbnail) {
        const imgUrl = result.pagemap.cse_thumbnail[0].src
       
        const imgElement = document.createElement('img')
        const imgContElem = document.createElement('div')
        imgElement.src = imgUrl ? imgUrl : "icons/icon.svg"
        imgElement.alt = result.title
        imgContElem.width = 100
        imgContElem.height = 100
        imgElement.style.cursor = 'pointer'
        imgElement.classList.add('result-image')
        imgContElem.classList.add('search__image-cont')
        imgContElem.appendChild(imgElement)
        contentDiv.appendChild(imgContElem)
      }

      // Create text div
      const textDiv = document.createElement('div')
      const textDivCont = document.createElement('div')
      textDiv.classList.add('text-div')
      textDiv.classList.add('text__div-cont')

      // Add title, snippet, and link
      const titleElement = document.createElement('h3')
      titleElement.textContent = result.title
      titleElement.style.cursor = 'pointer'
      titleElement.addEventListener('click', function (e) {
        e.preventDefault()
        openLink(result.link, openInNewTabCheckbox.checked)
      })
      textDiv.appendChild(titleElement)

      const snippetElement = document.createElement('p')
      snippetElement.textContent = result.snippet
      textDiv.appendChild(snippetElement)

      const linkElement = document.createElement('a')
    
      linkElement.href = result.link
      linkElement.textContent = 'visit site'
      linkElement.target = '_blank'
      linkElement.classList.add("visit__link")
      textDiv.appendChild(linkElement)

      textDivCont.appendChild(textDiv)
      contentDiv.appendChild(textDivCont)
      resultItem.appendChild(contentDiv)

      const saveImg = document.createElement('i')
      const saveImgCont = document.createElement('div')
      saveImg.style.cursor = "pointer"
      saveImg.classList.add('save-link')
      saveImgCont.classList.add('save__link-icon-cont')
      saveImg.classList.add('fa', 'fa-solid', 'fa-file-circle-plus');
      saveImg.addEventListener('click', () => {
        const folderName = document.getElementById('folder-select').value
        const resultToSave = {
          link: result.link,
          title: result.title,
          snippet: result.snippet,
        }
        addContentToFolder(folderName, resultToSave, true)
      })
  
      saveImgCont.appendChild(saveImg)
      resultItem.appendChild(saveImgCont)

      // Append to main search results div
      searchResultsDiv.appendChild(resultItem)
    })

    // Render pagination buttons
    renderPaginationButtons(results.length, currentPage, resultsPerPage)
  }
}
