const assert = require('chai').assert;
const protractorUtils = require('./index');

describe('the protractor utilities', () => {
  describe('the hide redux devtools helper', () => {
    it('should exist', () => {
      assert.isFunction(protractorUtils.hideReduxDevTools);
    });
  });

  describe('the wait until url contains helper', () => {
    it('should exist', () => {
      assert.isFunction(protractorUtils.waitUntilURLContains);
    });
  });

  describe('the wait until url is loaded helper', () => {
    it('should exist', () => {
      assert.isFunction(protractorUtils.waitUntilURLIsLoaded);
    });
  });

  describe('the get local storage value helper', () => {
    it('should exist', () => {
      assert.isFunction(protractorUtils.getLocalstorageValue);
    });
  });
});
