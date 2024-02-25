import { isCursorOverElement } from "./isCursorOverElement"

let isListDetail = true
let isCardDetail = false
let isBookmarks = true
let isFavorites = false
let isCollection = false
let isLinks = false
let isImages = false
let isVideos = false
let isArticles = false

export {
  isListDetail,
  isCardDetail,
  isFavorites,
  isCollection,
  isLinks,
  isImages,
  isVideos,
  isArticles,
}

export function setIsBookmarks(value) {
  isBookmarks = value // Define a function to set the value of isBookmarks
}

export function setIsFavorites(value) {
  isFavorites = value
}

export function setIsCollection(value) {
  isCollection = value
}

export function setIsLinks(value) {
  isLinks = value
}

export function setIsImages(value) {
  isImages = value
}

export function setIsVideos(value) {
  isVideos = value
}

export function setIsArticles(value) {
  isArticles = value
}

export function getIsBookmarks() {
  return isBookmarks
}

export function getIsFavorites() {
  return isFavorites
}

export function getIsCollection() {
  return isCollection
}

export function getIsLinks() {
  return isLinks
}
export function getIsImages() {
  return isImages
}
export function getIsVideos() {
  return isVideos
}
export function getIsArticles() {
  return isArticles
}

export function listOption() {
  const listIcon = document.querySelector(
    '.dashboardSectionContentHeadingSortIcon1',
  )
  const listTileDiv = document.querySelector('.listTileDiv')
  const listDetailTile = document.querySelector('.listDetailTile')
  const dashboardSectionContentHolder = document.querySelector(
    '.dashboardSectionContentHolder',
  )
  const dashboardCardDisplay = document.querySelector('.dashboardCardDisplay')
  const listCardDetail = document.querySelector('.listCardDetail')
  const listSelectedIcon = document.querySelector('.listSelectedIcon')
  const listNotSelectedIcon = document.querySelector('.listNotSelectedIcon')
  const cardNotSelectedIcon = document.querySelector('.cardNotSelectedIcon')
  const cardSelectedIcon = document.querySelector('.cardSelectedIcon')

  listIcon.addEventListener('mouseover', function () {
    listTileDiv.style.display = 'block'
  })

  listIcon.addEventListener('mouseout', function () {
    if (!isCursorOverElement(listTileDiv)) {
      listTileDiv.style.display = 'none'
    }
  })

  listTileDiv.addEventListener('mouseover', function () {
    listTileDiv.style.display = 'block'
  })

  listTileDiv.addEventListener('mouseout', function () {
    if (!isCursorOverElement(listIcon)) {
      listTileDiv.style.display = 'none'
    }
  })

  // function isCursorOverElement(element) {
  //   const rect = element.getBoundingClientRect()
  //   return (
  //     rect.left <= event.clientX &&
  //     event.clientX <= rect.right &&
  //     rect.top <= event.clientY &&
  //     event.clientY <= rect.bottom
  //   )
  // }

  document.addEventListener('mousemove', function (event) {
    if (!isCursorOverElement(listIcon) && !isCursorOverElement(listTileDiv)) {
      listTileDiv.style.display = 'none'
    }
  })

  listDetailTile.addEventListener('click', function () {
    if (getIsBookmarks()) {
      isListDetail = true
      isCardDetail = false
      listSelectedIcon.style.display = 'flex'
      listNotSelectedIcon.style.display = 'none'
      cardNotSelectedIcon.style.display = 'flex'
      cardSelectedIcon.style.display = 'none'
      if (isListDetail) {
        dashboardSectionContentHolder.style.display = 'flex'
        dashboardCardDisplay.style.display = 'none'
      }
    }
  })

  listCardDetail.addEventListener('click', function () {
    if (getIsBookmarks()) {
      isCardDetail = true
      isListDetail = false
      cardNotSelectedIcon.style.display = 'none'
      cardSelectedIcon.style.display = 'flex'
      listSelectedIcon.style.display = 'none'
      listNotSelectedIcon.style.display = 'flex'
      if (isCardDetail) {
        dashboardCardDisplay.style.display = 'flex'
        dashboardSectionContentHolder.style.display = 'none'
      }
    }
  })
}
