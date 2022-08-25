const button = document.getElementsByTagName("button")[0];
const password = document.getElementById("password");
const pass_conf = document.getElementById("password_confirm");
const form = document.getElementsByTagName("form")[0];

button.addEventListener('click', (event) =>{
    if(password.value != pass_conf.value){
        event.preventDefault();
        password.setCustomValidity("Passwords do not match");
        pass_conf.setCustomValidity(" ");
        password.reportValidity(); //shows the message
    } else {
        password.setCustomValidity("");
        pass_conf.setCustomValidity("");
    }
})

password.addEventListener('blur',()=>{
    password.setCustomValidity("");
})

pass_conf.addEventListener('blur',()=>{
    password.setCustomValidity("");
})