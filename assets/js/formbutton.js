const sendbutton = document.getElementById("sendbutton");
const resetbutton = document.getElementById("reset");
const inputname = document.getElementById("inputname");
const inputemail = document.getElementById("inputemail");
const inputsocial = document.getElementById("inputsocial");
const inputorder = document.getElementById("inputorder");


sendbutton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(sendbutton);
    if (!sendbutton.classList.contains("loading")) {
        sendbutton.classList.add("loading");
        sendbutton.textContent = "Sending...";
        sendbutton.disabled;
        
        setTimeout(() => {
            sendbutton.classList.remove("loading");
            sendbutton.classList.add("sent");
            sendbutton.classList.remove("sent");
            resetbutton.style.display = "inline-block";
            sendbutton.textContent = "Message Sent!";
        }, 3000);
    }
});


resetbutton.addEventListener("click", event => {
    event.preventDefault();
    sendbutton.textContent = "Submit";
    resetbutton.style.display = "none";
    inputname.value = "";
    inputemail.value = "";
    inputsocial.value = "";
    inputorder.value = "";
})