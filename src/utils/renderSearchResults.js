import { addContentToFolder } from './addContentToFolder'
import { renderPaginationButtons } from './renderPaginationButtons'

export function renderSearchResults(results, currentPage, resultsPerPage) {
  const openInNewTabCheckbox = document.getElementById('open-in-new-tab')
  const searchResultsDiv = document.getElementById('search-results')
  const startIndex = (currentPage - 1) * resultsPerPage
  const endIndex = startIndex + resultsPerPage
  const paginatedResults = results.slice(startIndex, endIndex)

  searchResultsDiv.innerHTML = ''

  paginatedResults.forEach((result) => {
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
      imgElement.src = imgUrl
      imgElement.alt = 'Result Image'
      imgContElem.width = 100
      imgContElem.height = 100
      imgContElem.classList.add('search__image-cont')
      imgElement.style.cursor = 'pointer'
      imgElement.classList.add('result-image')
      imgContElem.appendChild(imgElement)
      contentDiv.appendChild(imgContElem)
    }

    const textDiv = document.createElement('div')
    textDiv.classList.add('text-div')

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
    linkElement.textContent = `visit site`
    linkElement.target = '_blank'
    linkElement.addEventListener('click', function (e) {
      e.preventDefault()
      openLink(result.link, openInNewTabCheckbox.checked)
    })
    textDiv.appendChild(linkElement)

    contentDiv.appendChild(textDiv)
    resultItem.appendChild(contentDiv)

    const saveImg = document.createElement('i')
    const saveImgCont = document.createElement('div')

    saveImg.style.cursor = 'pointer'
    saveImgCont.classList.add('save__link-icon-cont')

    saveImg.classList.add('save-link')
    saveImg.classList.add('fa', 'fa-solid', 'fa-file-circle-plus')

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

    searchResultsDiv.appendChild(resultItem)
  })

  renderPaginationButtons(results.length, currentPage, resultsPerPage)
}
