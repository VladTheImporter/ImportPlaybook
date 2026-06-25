chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "getVehicleTitle") {

        const title = document.querySelector("h1")?.innerText || document.title;

        sendResponse({
            title: title
        });

    }

});