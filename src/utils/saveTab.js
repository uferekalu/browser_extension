export function saveTab() {
  const tabSection = document.querySelector('.tabSection')
  const saveTabsHolder = document.querySelector('.saveTabsHolder')
  const actionContainer = document.querySelector('.action_container')
  const filterCollectionHolder = document.querySelector(
    '.filterCollectionHolder',
  )
  const searchResultsHolder = document.querySelector('.searchResultsHolder')
  const openTabHolder = document.querySelector('.openTabHolder')
  const emptyDiv = document.querySelector('.emptyDiv')
  const footer = document.querySelector('.footer')
  const tabsSection = document.querySelector('.tabsSection')
  const gptSection = document.querySelector('.gptSection')
  const gptResponseSection = document.querySelector('.gptResponseSection')

  saveTabsHolder.addEventListener('click', function () {
    actionContainer.classList.add('hideActionContainer')
    filterCollectionHolder.classList.add('hideFilterCollectionHolder')
    searchResultsHolder.classList.add('hideSearchResultHolder')
    openTabHolder.classList.add('hideOpenTabHolder')
    emptyDiv.classList.add('hideEmptyDiv')
    footer.classList.add('modifiyFooter')
    tabSection.classList.add('showTabSection')
    tabsSection.classList.remove('showTabsSection')
    gptSection.classList.remove("showGptSection")
    gptResponseSection.classList.remove('showGptResponseSection')
  })
}
