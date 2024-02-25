import { getTotalSavedLinksCount } from "./getTotalsavedLinksCount"
import { incrementLinkCounterAndCheckForReview } from "./incrementLinkCounter"

export function addContentToFolder(folderName, content, showAlert) {
  let folders = JSON.parse(localStorage.getItem('folders')) || {}
  if (!folders[folderName]) {
    folders[folderName] = []
    if (showAlert) {
      alert('Folder does not exist')
    }
    return 'noFolder' // Indicates folder does not exist
  }

  const isLinkPresent = folders[folderName].some(
    (item) => item.link === content.link,
  )

  if (isLinkPresent) {
    // Only show the alert if showAlert is true
    if (showAlert) {
      alert('This link is already saved in this folder.')
    }
    return 'linkExists' // Indicates link is already present
  }

  // Check if the total number of saved links is 50
  if (getTotalSavedLinksCount() >= 50) {
    alert(
      'You have reached the maximum number of saved links for free users. Please upgrade to save more links.',
    )
    // window.location.href = 'https://xprimoi.com/upgrade';//'https://quicksearchplus.com/upgrade'; // window.location.href = 'your-sign-up-or-upgrade-page-url';
    chrome.tabs.create({ url: 'https://xprimoi.net' })

    return 'limitReached'
  }

  folders[folderName] = [content, ...folders[folderName]]
  localStorage.setItem('folders', JSON.stringify(folders))

  if (showAlert) {
    alert(`Link successfully saved to '${folderName}' folder.`)
  }

  incrementLinkCounterAndCheckForReview()
  return 'added' // Indicates link was successfully added
}
