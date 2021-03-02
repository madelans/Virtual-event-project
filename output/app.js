"use strict";

var names = document.getElementById("name");
var lastNames = document.getElementById("lastname");
var emails = document.getElementById("email");
var pais = document.getElementById("pais");
var num = document.getElementById("num");
var job = document.getElementById("job"); //Set data to Localstorage 

names.addEventListener("focusout", function save_data() {
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
}); // Get data to LocalStorage 

function recuperoValor() {
  names.value = localStorage.getItem("fn");
  lastNames.value = localStorage.getItem("ln");
  email.value = localStorage.getItem("email");
  pais.value = localStorage.getItem("country");
  num.value = localStorage.getItem("num");
  job.value = localStorage.getItem("job");
}

document.addEventListener("DOMContentLoaded", recuperoValor);