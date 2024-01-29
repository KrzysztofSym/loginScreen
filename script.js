let eField = document.getElementById("email_field");
let eLabel = document.getElementById("email_label");
let eError = document.getElementById("email_error");
let btn = document.querySelector(".btn");
eError.innerHTML = "";

function validateEmail(){
if(!eField.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    eError.innerHTML = "Please enter a valid email";
    eError.classList.add("active");
    return false;
}   
eError.classList.remove("active");
return true;
}

btn.addEventListener("click", ()=> {
    validateEmail();
});

