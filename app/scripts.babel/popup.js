'use strict';

const activeTab = function () {
  return new Promise(function (resolve) {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      resolve(tabs[0]);
    });
  });
};

window.randomizeRadioEntries = function () {
  activeTab().then((tab) => {
    chrome.tabs.sendMessage(tab.id, {action: 'randomizeRadioEntries'});
  });
};

window.showButtons = function(){
  activeTab().then((tab) => {
    chrome.tabs.sendMessage(tab.id, {action: 'showButtons'});
  });
};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('radio-button').addEventListener('click', randomizeRadioEntries);
  document.getElementById('show-buttons-button').addEventListener('click', showButtons);
});