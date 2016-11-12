'use strict';

class PageManipulator {
  randomizeRadioInputs() {
    let $radios = $('input[type=radio]');
    let $radiosByName = _.groupBy($radios, 'name');
    _.forEach($radiosByName, (values) => {
      let selection = Math.floor(Math.random() * values.length);
      $(values[selection]).prop('checked', true);
    });

    let attentionPhrases = ['Please select', 'Please answer', 'please select', 'please answer'];
    _.forEach(attentionPhrases, (phrase) => {
      $('*:contains(' + phrase + ')').each(function () {
        if ($(this).children().length < 1) $(this).css({'font-size': '3rem', 'color': 'red'})
      });
    });
  }

  showButtons() {
    $('#Buttons').find('input').prop('style', 'display:block');
  }
}

chrome.runtime.onMessage.addListener(
  function (request, sender) {
    if (request.action === 'randomizeRadioEntries') {
      new PageManipulator().randomizeRadioInputs();
    }
    else if (request.action === 'showButtons') {
      new PageManipulator().showButtons();
    }
  });