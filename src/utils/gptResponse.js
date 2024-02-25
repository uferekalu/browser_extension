export function gptResponse() {
  console.log('running response script')
  const gptResponseSection = document.querySelector('.gptResponseSection')
  const gptSectionPromptImgSender = document.querySelector(
    '.gptSectionPromptImgSender',
  )
  const actionContainer = document.querySelector('.action_container')
  const filterCollectionHolder = document.querySelector(
    '.filterCollectionHolder',
  )
  const searchResultsHolder = document.querySelector('.searchResultsHolder')
  const profileSection = document.querySelector('.profileSection')
  const tabSection = document.querySelector('.tabSection')
  const tabsSection = document.querySelector('.tabsSection')
  const gptSection = document.querySelector('.gptSection')

  gptSectionPromptImgSender.addEventListener('click', function () {
    console.log('prompt send clicked')
    actionContainer.classList.add('hideActionContainer')
    filterCollectionHolder.classList.add('hideFilterCollectionHolder')
    searchResultsHolder.classList.add('hideSearchResultHolder')
    profileSection.classList.remove('showProfileSection')
    tabSection.classList.remove('showTabSection')
    tabsSection.classList.remove('showTabsSection')
    gptSection.classList.remove('showGptSection')
    gptResponseSection.classList.add('showGptResponseSection')
  })
}
