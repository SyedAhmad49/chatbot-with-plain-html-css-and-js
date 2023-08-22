const chatbotId = window.chatbaseConfig.chatbotId;
console.log(chatbotId)
// Set iframe attributes
var iframe = document.createElement("iframe");
// Set iframe attributes
iframe.id = "chat-init";
// iframe.src = "https://chat.ray-solutions.co.uk/index.html";
iframe.src = "./Hobot.html";
iframe.width = "100%";
// iframe.style.minWidth = "420px";
// iframe.style.maxWidth = "420px";
iframe.style.width = "100px"
iframe.style.height = "100px";
iframe.style.right = "0";
iframe.style.position = "fixed";
iframe.style.bottom = "10px"
iframe.frameBorder = "0";
iframe.onload = iframeLoaded
document.body.appendChild(iframe)
let observer;

function iframeLoaded() {
    console.log("Iframe has finished loading.");

    // Get the iframe element
    const iframe = document.getElementById("chat-init");

    // Get the iframe's content window and document
    const iframeWindow = iframe.contentWindow || iframe.contentDocument.defaultView;
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    // Access elements within the iframe's document
    var chatContainer = iframeDocument.getElementById("myForm");

    if (chatContainer) {
        // Create a MutationObserver to observe changes in the style attribute
        observer = new MutationObserver(mutations => {
            const displayProperty = window.getComputedStyle(chatContainer);
            if(displayProperty.display === "none") {
                iframe.style.height = '100px';
                iframe.style.width = '100px';
            } else {
                iframe.style.height = '80%';
                iframe.style.width = '442px';
            }
        });

        // Observe changes to the style attribute of the chatContainer
        observer.observe(chatContainer, { attributes: true, attributeFilter: ["style"] });
    } else {
        console.log("Chat container not found.");
    }
}
// Disconnect the observer when you're done
// if (observer) {
//     observer.disconnect();
// }






