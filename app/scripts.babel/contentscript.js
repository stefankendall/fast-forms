'use strict';

class PageManipulator {
  randomizeRadioInputs() {
    let $radios = $('input[type=radio]');
    let $radiosByName = _.groupBy($radios, 'name');
    _.forEach($radiosByName, (values) => {
      let selection = Math.floor(Math.random() * values.length);
      $(values[selection]).prop('checked', true);
    });
  }
}

chrome.runtime.onMessage.addListener(
  function (request, sender) {
    if (request.action === 'randomizeRadioEntries') {
      new PageManipulator().randomizeRadioInputs();
    }
  });