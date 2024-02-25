export function Tabs() {
  const tabsHolder = document.querySelector('.tabsHolder')
  const tabsSection = document.querySelector('.tabsSection')
  const actionContainer = document.querySelector('.action_container')
  const filterCollectionHolder = document.querySelector(
    '.filterCollectionHolder',
  )
  const searchResultsHolder = document.querySelector('.searchResultsHolder')
  const profileSection = document.querySelector('.profileSection')
  const tabSection = document.querySelector('.tabSection')
  const openTabHolder = document.querySelector('.openTabHolder')
  const emptyDiv = document.querySelector('.emptyDiv')
  const footer = document.querySelector('.footer')
  const gptSection = document.querySelector('.gptSection')
  const gptResponseSection = document.querySelector('.gptResponseSection')
  const tabsSectionContentDetailsHolder = document.querySelectorAll(
    '.tabsSectionContentDetailsHolder',
  )
  const tabsSectionSelectedSectionDetailsTitle = document.querySelector(
    '.tabsSectionSelectedSectionDetailsTitle',
  )
  const tabsChecked = document.querySelector('.tabsChecked')

  let numSelectedTags = 0
  console.log('number of selected tags', numSelectedTags)

  function showTabsChecked() {
    if (numSelectedTags > 0) {
      tabsChecked.style.display = 'flex'
    } else {
      tabsChecked.style.display = 'none'
    }
  }

  tabsHolder.addEventListener('click', function () {
    actionContainer.classList.add('hideActionContainer')
    filterCollectionHolder.classList.add('hideFilterCollectionHolder')
    searchResultsHolder.classList.add('hideSearchResultHolder')
    tabsSection.classList.add('showTabsSection')
    openTabHolder.classList.add('hideOpenTabHolder')
    emptyDiv.classList.add('hideEmptyDiv')
    footer.classList.add('modifiyFooter')
    gptSection.classList.remove('showGptSection')
    gptResponseSection.classList.remove('showGptResponseSection')
  })

  tabsSectionContentDetailsHolder.forEach((tab) => {
    const tabsSectionContentUnChecked = tab.querySelector(
      '.tabsSectionContentUnChecked',
    )
    const tabsSectionContentChecked = tab.querySelector(
      '.tabsSectionContentChecked',
    )

    tabsSectionContentUnChecked.addEventListener('click', function () {
      tabsSectionContentUnChecked.style.display = 'none'
      tabsSectionContentChecked.style.display = 'flex'
      numSelectedTags += 1
      tabsSectionSelectedSectionDetailsTitle.textContent =
        numSelectedTags > 1
          ? numSelectedTags + ' ' + 'Tabs selected'
          : numSelectedTags === 1
          ? numSelectedTags + ' ' + 'Tab selected'
          : 'No Tab selected'
      showTabsChecked()
    })

    tabsSectionContentChecked.addEventListener('click', function () {
      tabsSectionContentUnChecked.style.display = 'flex'
      tabsSectionContentChecked.style.display = 'none'
      numSelectedTags -= 1
      tabsSectionSelectedSectionDetailsTitle.textContent =
        numSelectedTags > 1
          ? numSelectedTags + ' ' + 'Tabs selected'
          : numSelectedTags === 1
          ? numSelectedTags + ' ' + 'Tab selected'
          : 'No Tab selected'
      showTabsChecked()
    })
  })

  tabsChecked.addEventListener('click', function() {
    tabsSectionContentDetailsHolder.forEach((tab) => {
      const tabsSectionContentUnChecked = tab.querySelector(
        '.tabsSectionContentUnChecked',
      )
      const tabsSectionContentChecked = tab.querySelector(
        '.tabsSectionContentChecked',
      )
      tabsSectionContentUnChecked.style.display = 'flex'
      tabsSectionContentChecked.style.display = 'none'
      numSelectedTags = 0
      tabsSectionSelectedSectionDetailsTitle.textContent = "No Tabs selected"
      tabsChecked.style.display = 'none'
    })
  })
}
