let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 


document.getElementById('contact-us-btn').addEventListener('click', openChatbox);
function openChatbox() {
    document.getElementById('chatbox-modal').style.display = 'block';
  }
  
function closeChatbox() {
document.getElementById('chatbox-modal').style.display = 'none';
}
  