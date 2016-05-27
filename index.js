const hotkeys = require('protractor-hotkeys');

function hideReduxDevTools() {
  hotkeys.trigger('ctrl+h');
}

function waitUntilURLContains(browser, text, timeout) {
  const specTimeout = timeout || 10000;

  return browser.driver
      .wait(() => browser.driver.getCurrentUrl()
      .then(currentUrl => currentUrl.includes(text)), specTimeout);
}

module.exports.hideReduxDevTools = hideReduxDevTools;
module.exports.waitUntilURLContains = waitUntilURLContains;
