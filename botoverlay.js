const openButtonsvg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`
  const closeButtonsvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>`
  const openButtonStyle = 'background-color: #7367f0; color: white;padding: 16px 20px;border: none;cursor: pointer;opacity: 0.8;position: fixed;border-width: 0px;bottom: 23px;right: 28px;border-radius: 100px;user-select: none;'
  const closeButtonStyle = 'display:none;background-color: #7367f0; color: white;padding: 16px 20px;border: none;cursor: pointer;opacity: 0.8;position: fixed;border-width: 0px;bottom: 23px;right: 28px;border-radius: 100px;user-select: none;'
  function createButton (id,svg,clickHandler, style)  {
    const openButton = document.createElement('button');
    openButton.id = id;
    openButton.style.cssText = style
    openButton.innerHTML = svg;
    openButton.onclick = clickHandler
    document.body.appendChild(openButton)
  }
  const messages = []
  // Create the "Open" button
  createButton('open-button', openButtonsvg, openForm,openButtonStyle)
  // Create the "Close" button
  createButton('close-button', closeButtonsvg, closeForm, closeButtonStyle)
// Create the main chat popup container
  const chatPopup = document.createElement('div');
  chatPopup.classList.add('chat-popup');
  chatPopup.style.cssText = 'background:rgb(245, 250, 255);maxWidth:442px;width:100%;display: none;position: fixed;bottom: 120px;right: 15px;border: 1px solid #f1f1f1;z-index: 9;'
  chatPopup.id = 'myForm';
  function applyMediaQueryStyles() {
    const myFormElement = document.getElementById('myForm')
    const myPopupElement = document.getElementById('form-id')
  if (window.innerWidth <= 442) {
    if(myFormElement) {
      myFormElement.style.height = '80%';
      myFormElement.style.width = '100%';
      myFormElement.style.right = '0 !important';
      myFormElement.style.maxHeight = '80%';
    }
    if(myPopupElement) {
      myPopupElement.style.maxWidth = '100%';
      myPopupElement.style.width = '98%';
      myFormElement.style.maxHeight = '80%';
    }
  } else {
    if(myFormElement) {
      myFormElement.style.maxWidth = "442px"
      myFormElement.style.height = '80%';
      myFormElement.style.maxHeight = '500px';
    }
    if(myPopupElement) {
      myPopupElement.style.maxWidth = "442px"
      myPopupElement.style.height = "80%"
      myPopupElement.style.maxHeight = "500px"
    }
  }
}

  document.body.appendChild(chatPopup);

  // Create the style header
  const styleHeader = document.createElement('div');
  styleHeader.id = 'styleHeader';
  styleHeader.style.cssText = 'height: 10%; display: flex; align-items: center; padding: 0; margin: 0; border-top-right-radius: 5px; border-top-left-radius: 5px;';
  chatPopup.appendChild(styleHeader);

  // Create the image container
  const imageContainer = document.createElement('div');
  imageContainer.style.paddingLeft = '5px';
  styleHeader.appendChild(imageContainer);

  // Create the image
  const image = document.createElement('img');
  image.src = './ray.png';
  image.height = '36';
  image.width = '36';
  imageContainer.appendChild(image);

  // Create the text container
  const textContainer = document.createElement('div');
  textContainer.style.flexGrow = '1';
  textContainer.style.paddingLeft = '10px';
  styleHeader.appendChild(textContainer);

  // Create the title
  const title = document.createElement('div');
  title.style.fontSize = '16px';
  title.className = 'setTextColor';
  title.textContent = 'Ray';
  textContainer.appendChild(title);

  // Create the subtitle
  const subtitle = document.createElement('div');
  subtitle.style.fontSize = '11px';
  subtitle.className = 'setTextColor';
  subtitle.textContent = 'Digital Assistant';
  textContainer.appendChild(subtitle);

  // Create the minimize button container
  const minimizeButtonContainer = document.createElement('div');
  minimizeButtonContainer.style.paddingRight = '30px';
  styleHeader.appendChild(minimizeButtonContainer);

  // Create the minimize button
  const minimizeButton = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  minimizeButton.classList.add('minimizeButton', 'setTextColor');
  minimizeButton.id = 'minimize'; // Only one id value here
  minimizeButton.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  minimizeButton.setAttribute('onclick', 'closeForm()');
  minimizeButton.setAttribute('width', '24');
  minimizeButton.setAttribute('height', '24');
  minimizeButton.setAttribute('fill', 'black');
  minimizeButton.setAttribute('viewBox', '0 0 16 16');
  const pathElement1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathElement1.setAttribute('d', 'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z');

  const pathElement2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathElement2.setAttribute('d', 'M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z');

  minimizeButton.appendChild(pathElement1);
  minimizeButton.appendChild(pathElement2)
  minimizeButton.addEventListener('mouseenter', () => {
  // Code to execute when the minimizeButton is hovered over
  minimizeButton.style.fill = 'white';
  minimizeButton.style.cursor = 'pointer';
});

minimizeButton.addEventListener('mouseleave', () => {
  // Code to execute when the mouse leaves the minimizeButton
  minimizeButton.style.fill = 'initial'; // Reset to default or original background color
  minimizeButton.style.cursor = 'initial'; // Reset to default or original text color
})
  minimizeButtonContainer.appendChild(minimizeButton);

  // Create the form container
  const formContainer = document.createElement('form');
  formContainer.className = 'form-container';
  formContainer.id = 'form-id';
  formContainer.style.cssText = `max-width: 420px;
  min-width: 420px;
  width:100%;
  /* padding: 10px; */
  // background-color: white;
  overflow-y: auto;
  /* overflow-x:hidden; */
  height: 80%;
  margin-bottom: 50px;`
  chatPopup.appendChild(formContainer);
  // Create the chat container
  const chatContainerElement = document.createElement('div');
  chatContainerElement.id = 'chat-container';
  chatContainerElement.style.marginTop = '1rem';
  formContainer.appendChild(chatContainerElement);

  // Create the input container
  const inputContainer = document.createElement('div');
  inputContainer.className = 'styleInputGroup';
  inputContainer.style.cssText = `position: absolute;
  bottom: 0;
  line-height: 40px;
  width: 100%;
  background-color: #fff;
  /* box-shadow: 0 3px 10px 0 rgba(34,41,47,.1);  */
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  maxWidth:"442px";
  line-height: 2;
  border: 2px solid #7367f0;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  display: grid;
  grid-template-columns: 1fr auto;
  box-sizing:border-box;
  align-items: center;`
  formContainer.appendChild(inputContainer);

  // Create the input field
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.id = 'messageId';
  inputField.placeholder = 'Type your message';
  inputField.setAttribute('oninput', 'inputChange(event)');
  inputField.setAttribute('onkeydown', 'handleKeyDown(event)');
  inputField.className = 'styleInput';
  inputField.style.cssText = `font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  border: none;
  outline:none;
  min-width: max-content;
  `
  inputContainer.appendChild(inputField);

  // Create the send button
  const sendButton = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  sendButton.setAttribute('width', '20');
  sendButton.setAttribute('height', '20');
  sendButton.setAttribute('fill', 'none');
  sendButton.id = 'sndButton';
  sendButton.className = 'sndButton';
  sendButton.setAttribute('onclick', 'sndMessage()');
  sendButton.setAttribute('viewBox', '0 0 24 24');
  sendButton.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  sendButton.style.cssText = `cursor: pointer;
  line-height: 2;
  display: none;`
  const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathElement.setAttribute('d', 'M5.694 12 2.299 3.272c-.236-.607.356-1.188.942-.982l.093.04 18 9a.75.75 0 0 1 .097 1.283l-.097.058-18 9c-.583.291-1.217-.244-1.065-.847l.03-.096L5.694 12 2.299 3.272 5.694 12ZM4.402 4.54l2.61 6.71h6.627a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.649.743l-.101.007H7.01l-2.609 6.71L19.322 12 4.401 4.54Z');
  pathElement.setAttribute('fill', '#7367f0');

  sendButton.appendChild(pathElement)
  inputContainer.appendChild(sendButton);
  const animationKeyframes = [
  { transform: 'rotate(0deg)' },
  { transform: 'rotate(360deg)' }
]
  // Create the spinner element
  const spinner = document.createElement('span');
  spinner.className = 'spinner';
  spinner.id = 'spinner';
  spinner.style.cssText = `border: 4px solid #7367f0;
    border-left: 4px solid #333;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
    display: none; 
    `
    spinner.animate(animationKeyframes, {
      duration: 1000, // Animation duration in milliseconds
      iterations: Infinity
    })
    // const keyframes = document.createElement("keyframes");
    // keyframes.innerHTML = "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
    // spinner.style.animation = keyframes
  inputContainer.appendChild(spinner);



  const chatContainer = document.getElementById('chat-container')
  const target = document.getElementById('form-id');
  target.addEventListener('DOMNodeInserted', (event) => {
    setScroll();
  });
function inputChange(event) {
  event.preventDefault()
  if(event.target.value.trim().length > 0 && document.getElementById('spinner').style.display !== 'block') {
    document.getElementById('sndButton').style.display = 'block'
  } else {
    document.getElementById('sndButton').style.display = 'none'
  }
} 
function openForm() {
  document.getElementById('myForm').style.display = 'block'
  document.getElementById('open-button').style.display = 'none'
  document.getElementById('close-button').style.display = 'block'
}

function closeForm() {
  document.getElementById('myForm').style.display = 'none'
  document.getElementById('open-button').style.display = 'block'
  document.getElementById('close-button').style.display = 'none'
}
function setScroll() {
       var outterDiv=document.getElementById('form-id');
       outterDiv.scrollTop=outterDiv.scrollHeight;
       return outterDiv.scrollTop;
}
        // Your JavaScript code
        const headerTextColor = "white"; // Change this to the color you want
        const botImageUrl = "https://img.icons8.com/?size=512&id=62giybpMlD07&format=png"
        const userImageUrl = "https://img.icons8.com/?size=512&id=7RZMcuMjHkUP&format=png"
        // Set the background color of the element with id "colored-box"
        const elements = document.getElementsByClassName("setTextColor");
        // const headerTextColor = "red"; // Replace with your desired color

        for (let i = 0; i < elements.length; i++) {
          elements[i].style.color = headerTextColor;
        }
        // Your JavaScript code
        var headerBackgroundColor = "#7367f0"; // Change this to the color you want

        // Set the background color of the element with id "colored-box"
        const element = document.getElementById("styleHeader");
        element.style.backgroundColor = headerBackgroundColor
        element.style.zIndex = 5
function addBotMessage(message) {
  messages.push(message)
  renderChatMessage(message)
}
function renderChatMessage(message) {
  const row = document.createElement('div');
  row.classList.add('row');
  row.style.display = 'flex';
  row.style.marginTop = '1rem';
  row.style.marginBottom = '1rem';
  row.style.justifyContent = message.type === 'bot' ? 'flex-start' : 'flex-end';
  message?.type === 'bot' ? createBotChat(row, message) : createUserChat(row, message)
}
function createUserChat(row, message) {
  
  row.style.marginLeft = '2rem'
  const avatar = createAvatar(message.type, userImageUrl);
  const messageText = document.createElement('span');
  messageText.style.backgroundColor = '#6d62e4';
  messageText.style.padding = '10px';
  messageText.style.borderRadius = '10px';
  messageText.style.color = 'white';
  messageText.textContent = message.me;
  
  row.appendChild(messageText); // Append the message text directly to the row
  row.appendChild(avatar);
  chatContainer.appendChild(row);
}
function createBotChat(row, message) {
  row.style.marginRight = '2rem'
  const avatar = createAvatar(message.type, botImageUrl)
  const messageText = document.createElement('span');
  messageText.style.backgroundColor ='white';
  messageText.style.padding = '10px';
  messageText.style.borderRadius = '10px';
  messageText.style.color = 'black';
  messageText.textContent = message.bot;

  row.appendChild(avatar);
  row.appendChild(messageText); // Append the message text directly to the row
  chatContainer.appendChild(row);
}
  
function createAvatar(type, imageUrl) {
  const avatar = document.createElement('span');
  avatar.classList.add('box-shadow-1');
  avatar.style.cursor='pointer';
  avatar.style.minWidth = '36px';
  avatar.style.width = '36px';
  avatar.style.height = '36px';
  avatar.style.borderRadius = '50%';
  avatar.style.margin = '0 5px'; // Add some margin between avatar and message bubble
  avatar.style.display = 'inline-block'; // Add this line to set display property

  if (type === 'bot') {
    avatar.style.backgroundColor = '#c3c3c3';
  } else {
    avatar.style.backgroundColor = '#6d62e4';
  }

  if (imageUrl) {
    avatar.style.backgroundImage = `url(${imageUrl})`;
    avatar.style.backgroundSize = 'cover';
    avatar.style.backgroundPosition = 'center';
  }

  return avatar;
}
 
function sndMessage() {
  const formData = new FormData()
  const apiUrl = "https://raysolutions.pythonanywhere.com/chat_bot"
  const msg = document.getElementById("messageId").value;
  document.getElementById("messageId").value = ""
  if(msg.trim().length > 0) {
    document.getElementById('spinner').style.display = 'block'
    document.getElementById('sndButton').style.display = 'none'
  formData.append('message', msg)
    const resMessage = {me:msg, type:'me'} // Add message from "me"
    addBotMessage(resMessage)
  fetch(apiUrl, {method: 'POST',body:formData})
  .then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text();
  })
  .then(res => {
    // Process the JSON response data
    document.getElementById('spinner').style.display = 'none'
    document.getElementById('sndButton').style.display = 'block'
    const responseMessage = { bot : res, type:'bot' }
    addBotMessage(responseMessage)
  })
  .catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
  })
  } else {
    console.log('Please input text to send message')
  }
} 
function handleKeyDown(event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    if(document.getElementById('spinner').style.display !== 'block') {
      sndMessage();
    }
  }
}
applyMediaQueryStyles();

// Add a resize event listener to apply styles when the screen width changes
window.addEventListener('resize', applyMediaQueryStyles)       