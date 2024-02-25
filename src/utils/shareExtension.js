export function shareExtension() {
  const text = 'Check out this amazing Google Chrome Extension!'
  const url = 'https://chrome.google.com/webstore/detail/your-extension-id'

  // Share on Twitter
  const twitterUrl = `https://twitter.com/share?url=${url}&text=${text}`
  window.open(twitterUrl, '_blank').focus()
}
