document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.changeColorBtn');

    btn.addEventListener('click', async () => {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        console.log(tab);

chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: pickColor,
        })
    }); 

    function pickColor() {
        console.log('script working');
    }





});

