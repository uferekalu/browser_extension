// Function to get the total count of saved links
export function getTotalSavedLinksCount() {
    let total = 0
    const folders = JSON.parse(localStorage.getItem('folders')) || {}
    for (let folder in folders) {
      total += folders[folder].length
    }
    return total
  }
  