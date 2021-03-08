/* When the button is clicked:
  - Open current tab's url in new incognito tab
  - Close current tab
*/
reopenTab.addEventListener("click", async () => {
  try {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.windows.create({ "url": tab.url, "incognito": true });

  chrome.tabs.remove(tab.id, () => {
    console.log("Closed TAB")
  });
  } catch(err) {
    console.error(err);
  }
});

