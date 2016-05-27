'use strict';

const hotkeys = require('protractor-hotkeys');

module.exports.hideReduxDevTools = function () {
  hotkeys.trigger('ctrl+h');
};

module.exports.waitUntilURLContains = function (browser, text, timeout) {
  timeout = timeout || 10000;

  return browser.driver
      .wait(() => browser.driver.getCurrentUrl()
      .then(currentUrl => currentUrl.includes(text)), timeout);
};
