export function backToHomepage() {
  const logoHeader = document.querySelector('.logoHolder')
  const profileSection = document.querySelector('.profileSection')
  const actionContainer = document.querySelector('.action_container')
  const filterCollectionHolder = document.querySelector(
    '.filterCollectionHolder',
  )
  const searchResultsHolder = document.querySelector('.searchResultsHolder')
  const openTabHolder = document.querySelector('.openTabHolder')
  const emptyDiv = document.querySelector('.emptyDiv')
  const footer = document.querySelector('.footer')
  const tabSection = document.querySelector('.tabSection')
  const tabsSection = document.querySelector('.tabsSection')
  const gptSection = document.querySelector('.gptSection')
  const gptResponseSection = document.querySelector('.gptResponseSection')
  const dashboardSection = document.querySelector('.dashboardSection')
  const mainContainer = document.querySelector('.mainContainer')

  logoHeader.addEventListener('click', function () {
    profileSection.classList.remove('showProfileSection')
    actionContainer.classList.remove('hideActionContainer')
    filterCollectionHolder.style.marginTop = '0'
    filterCollectionHolder.classList.remove('hideFilterCollectionHolder')
    searchResultsHolder.style.marginTop = '0'
    searchResultsHolder.classList.remove('hideSearchResultHolder')
    openTabHolder.classList.remove('hideOpenTabHolder')
    emptyDiv.classList.remove('hideEmptyDiv')
    footer.classList.remove('modifiyFooter')
    tabSection.classList.remove('showTabSection')
    tabsSection.classList.remove('showTabsSection')
    gptSection.classList.remove("showGptSection")
    gptResponseSection.classList.remove('showGptResponseSection')
    dashboardSection.classList.remove('showDashboardSection')
    mainContainer.classList.remove('hideMainContainer')
  })
}
