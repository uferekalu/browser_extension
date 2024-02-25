import { isCursorOverElement } from './isCursorOverElement'

export function recentNameSort() {
  const recentNameSort = document.querySelector('.recentNameSort')
  const sortIcon = document.querySelector(
    '.dashboardSectionContentHeadingSortIcon2',
  )
  const recentNameSortContainerRecent = document.querySelector(
    '.recentNameSortContainerRecent',
  )
  const recentNameSortContainerName = document.querySelector(
    '.recentNameSortContainerName',
  )
  const recentNameSortContainerAZ = document.querySelector(
    '.recentNameSortContainerAZ',
  )
  const recentIcon = document.querySelector('.recentIcon')
  const recentNameSortContainerText = document.querySelector(
    '.recentNameSortContainerText',
  )
  const recentNameIcon = document.querySelector('.recentNameIcon')
  const recentNameSortContainerNameText = document.querySelector(
    '.recentNameSortContainerNameText',
  )
  const recentAZIcon = document.querySelector('.recentAZIcon')
  const recentNameSortContainerAZText = document.querySelector(
    '.recentNameSortContainerAZText',
  )
  const selectedRecentIcon = document.querySelector('.selectedRecentIcon')
  const selectedRecentNameIcon = document.querySelector(
    '.selectedRecentNameIcon',
  )
  const selectedRecentAZIcon = document.querySelector('.selectedRecentAZIcon')

  sortIcon.addEventListener('mouseover', function () {
    recentNameSort.style.display = 'flex'
  })

  sortIcon.addEventListener('mouseout', function () {
    if (!isCursorOverElement(recentNameSort)) {
      recentNameSort.style.display = 'none'
    }
  })

  recentNameSort.addEventListener('mouseover', function () {
    recentNameSort.style.display = 'block'
  })

  recentNameSort.addEventListener('mouseout', function () {
    if (!isCursorOverElement(sortIcon)) {
      recentNameSort.style.display = 'none'
    }
  })

  document.addEventListener('mousemove', function (event) {
    if (
      !isCursorOverElement(sortIcon) &&
      !isCursorOverElement(recentNameSort)
    ) {
      recentNameSort.style.display = 'none'
    }
  })

  recentNameSortContainerRecent.addEventListener('click', function () {
    selectedRecentIcon.style.display = 'flex'
    recentIcon.style.display = 'none'
    recentNameSortContainerText.classList.add(
      'recentNameSortContainerTextHighlighted',
    )
    recentNameSortContainerNameText.classList.remove(
      'recentNameSortContainerTextHighlighted',
    )
    recentNameSortContainerAZText.classList.remove(
      'recentNameSortContainerTextHighlighted',
    )
    selectedRecentNameIcon.style.display = 'none'
    recentNameIcon.style.display = 'flex'
    selectedRecentAZIcon.style.display = 'none'
    recentAZIcon.style.display = 'flex'
  })

  recentNameSortContainerName.addEventListener('click', function () {
    selectedRecentNameIcon.style.display = 'flex'
    recentNameIcon.style.display = 'none'
    recentNameSortContainerNameText.classList.add(
      'recentNameSortContainerTextHighlighted',
    )
    recentNameSortContainerText.classList.remove(
      'recentNameSortContainerTextHighlighted',
    )
    recentNameSortContainerAZText.classList.remove(
      'recentNameSortContainerTextHighlighted',
    )
    selectedRecentIcon.style.display = 'none'
    recentIcon.style.display = 'flex'
    selectedRecentAZIcon.style.display = 'none'
    recentAZIcon.style.display = 'flex'
  })

  recentNameSortContainerAZ.addEventListener('click', function () {
    selectedRecentAZIcon.style.display = 'flex'
    recentAZIcon.style.display = 'none'
    recentNameSortContainerAZText.classList.add(
      'recentNameSortContainerTextHighlighted',
    )
    recentNameSortContainerNameText.classList.remove(
      'recentNameSortContainerTextHighlighted',
    )
    recentNameSortContainerText.classList.remove(
      'recentNameSortContainerTextHighlighted',
    )
    selectedRecentIcon.style.display = 'none'
    recentIcon.style.display = 'flex'
    selectedRecentNameIcon.style.display = 'none'
    recentNameIcon.style.display = 'flex'
  })
}
