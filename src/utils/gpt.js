
import { showGptScreen, showLandingScreen } from './screenSwitch'

export function gpt() {
  document
    .getElementById('toggle-switch')
    .addEventListener('change', function () {
      if (this.checked) {
        showGptScreen()
      } else {
        showLandingScreen()
      }
    })

}
