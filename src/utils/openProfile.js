export function openProfile() {
  const openTabHolder = document.querySelector('.openTabHolder')
  const showdropdown = document.querySelector('.showdropdown')
  const profileHolder = document.querySelector('.profileHolder')
  const profileSection = document.querySelector('.profileSection')
  const actionContainer = document.querySelector('.action_container')
  const filterCollectionHolder = document.querySelector(
    '.filterCollectionHolder',
  )
  const searchResultsHolder = document.querySelector('.searchResultsHolder')
  const emptyDiv = document.querySelector('.emptyDiv')
  const footer = document.querySelector('.footer')
  const tabSection = document.querySelector('.tabSection')
  const tabsSection = document.querySelector('.tabsSection')
  const gptSection = document.querySelector('.gptSection')
  const gptResponseSection = document.querySelector('.gptResponseSection')
  const dashboardSection = document.querySelector('.dashboardSection')
  const mainContainer = document.querySelector('.mainContainer')
  dashboardSection.classList.remove('showDashboardSection')
  mainContainer.classList.remove('hideMainContainer')

  profileHolder.addEventListener('click', function () {
    profileSection.classList.add('showProfileSection')
    actionContainer.classList.add('hideActionContainer')
    filterCollectionHolder.style.marginTop = '60px'
    filterCollectionHolder.classList.add('hideFilterCollectionHolder')
    searchResultsHolder.style.marginTop = '50px'
    searchResultsHolder.classList.add('hideSearchResultHolder')
    openTabHolder.classList.add('hideOpenTabHolder')
    emptyDiv.classList.add('hideEmptyDiv')
    footer.classList.add('modifiyFooter')
    showdropdown.classList.remove('show')
    tabSection.classList.remove('showTabSection')
    tabsSection.classList.remove('showTabsSection')
    gptSection.classList.remove('showGptSection')
    gptResponseSection.classList.remove('showGptResponseSection')
    const dashboardSection = document.querySelector('.dashboardSection')
    const mainContainer = document.querySelector('.mainContainer')
    dashboardSection.classList.remove('showDashboardSection')
    mainContainer.classList.remove('hideMainContainer')
  })
}
