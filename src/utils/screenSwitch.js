const gptImg = document.querySelector('.gptImg')
const gptSection = document.querySelector('.gptSection')
const actionContainer = document.querySelector('.action_container')
const filterCollectionHolder = document.querySelector(
  '.filterCollectionHolder',
)
const searchResultsHolder = document.querySelector('.searchResultsHolder')
const profileSection = document.querySelector('.profileSection')
const tabSection = document.querySelector('.tabSection')
const tabsSection = document.querySelector('.tabsSection')
const openTabHolder = document.querySelector('.openTabHolder')
const emptyDiv = document.querySelector('.emptyDiv')
const footer = document.querySelector('.footer')
const gptResponseSection = document.querySelector('.gptResponseSection')
const dashboardSection = document.querySelector('.dashboardSection')
const mainContainer = document.querySelector('.mainContainer')
dashboardSection.classList.remove('showDashboardSection')
mainContainer.classList.remove('hideMainContainer')

const showLandingScreen = ()=>{
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
}


const showGptScreen = ()=>{
    actionContainer.classList.add('hideActionContainer')
    filterCollectionHolder.classList.add('hideFilterCollectionHolder')
    searchResultsHolder.classList.add('hideSearchResultHolder')
    gptSection.classList.add('showGptSection')
    openTabHolder.classList.add('hideOpenTabHolder')
    emptyDiv.classList.add('hideEmptyDiv')
    footer.classList.add('modifiyFooter')
    profileSection.classList.remove('showProfileSection')
    tabsSection.classList.remove('showTabsSection')
    tabSection.classList.remove('showTabSection')
    gptResponseSection.classList.remove('showGptResponseSection')
    const dashboardSection = document.querySelector('.dashboardSection')
    const mainContainer = document.querySelector('.mainContainer')
    dashboardSection.classList.remove('showDashboardSection')
    mainContainer.classList.remove('hideMainContainer')
}


export {
    showLandingScreen,
     showGptScreen
}