export function saveTabs() {
  const saveTabButton = document.querySelector('.saveTab')
  saveTabButton.addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: 'saveTabs' }, function (response) {
      if (response.success) {
        console.log('Tabs saved successfully')
      } else {
        console.log('Failed to save tabs:', response.message)
      }
    })
  })
}
