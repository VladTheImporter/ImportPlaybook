const button = document.getElementById("exportButton");
const vehicleInfo = document.getElementById("vehicleInfo");

button.addEventListener("click", async () => {

    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.tabs.sendMessage(tab.id, { action: "getVehicleTitle" }, (response) => {

        if (chrome.runtime.lastError) {
            vehicleInfo.textContent = "Could not connect to page.";
            return;
        }

        vehicleInfo.textContent = response.title;

    });

});