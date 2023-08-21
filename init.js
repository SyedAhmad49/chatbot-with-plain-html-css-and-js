
const chatbotId = window.chatbaseConfig.chatbotId;
console.log(chatbotId)
// Set iframe attributes
var iframe = document.createElement("iframe");
// Set iframe attributes
iframe.id = "chat-init";
// iframe.src = "https://chat.ray-solutions.co.uk/index.html";
iframe.src = "./Hobot.html";
iframe.width = "100%";
iframe.style.minWidth = "420px";
iframe.style.height = "100%";
iframe.style.right = "0";
iframe.style.position = "fixed";
iframe.style.bottom = "10px"
iframe.frameBorder = "0";
document.body.appendChild(iframe)

