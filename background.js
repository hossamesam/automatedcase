var textinput;


document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("myForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        textinput = event.target.querySelector("[name='textareaInput']").value;
        // alert(textinput);
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.tabs.sendMessage(tab.id, { action: "FROM_POPUP", data: textinput });
    });
});




