
const names = document.getElementById("name");
const lastNames = document.getElementById("lastname");
const email = document.getElementById("email");
const pais = document.getElementById("pais");
const num = document.getElementById("num");
const job = document.getElementById("job");




//Set data to Localstorage 


names.addEventListener ("focusout", function save_data() {
    localStorage.setItem("fn", names.value);
}); 

lastNames.addEventListener("focusout", function save_data() {
    localStorage.setItem("ln", lastNames.value);
});

email.addEventListener("focusout", function save_data() {
    localStorage.setItem("email", email.value);
});

pais.addEventListener("focusout", function save_data() {
    localStorage.setItem("country", pais.value);
});

num.addEventListener("focusout", function save_data() {
    localStorage.setItem("num", num.value);
});

job.addEventListener("focusout", function save_data() {
    localStorage.setItem("job", job.value);
});




// Get data to LocalStorage 

function recuperoValor () {
    names.value = localStorage.getItem("fn");
    lastNames.value = localStorage.getItem("ln");
    email.value = localStorage.getItem("email");
    pais.value = localStorage.getItem("country");
    num.value = localStorage.getItem("num");
    job.value = localStorage.getItem("job");
}


document.addEventListener("DOMContentLoaded", recuperoValor);