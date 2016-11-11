'use strict';

class PageManipulator {
  randomizeRadioInputs() {
    console.log('randomizin');
  }
}

chrome.runtime.onMessage.addListener(
  function (request, sender) {
    if (request.action === 'randomizeRadioEntries') {
      new PageManipulator().randomizeRadioInputs();
    }
  });