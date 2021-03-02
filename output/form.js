"use strict";

var form = document.getElementById('form');
var inputs = document.querySelectorAll('#form input');
var expressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  job: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  num: /^\d{7,14}$/
};
var fields = {
  name: false,
  lastname: false,
  job: false,
  email: false,
  num: false,
  pais: false
};

var formValidate = function formValidate(e) {
  switch (e.target.name) {
    case "name":
      validateField(expressions.name, e.target, 'name');
      break;

    case "lastname":
      validateField(expressions.lastname, e.target, 'lastname');
      break;

    case "job":
      validateField(expressions.job, e.target, 'job');
      break;

    case "email":
      validateField(expressions.email, e.target, 'email');
      break;

    case "num":
      validateField(expressions.num, e.target, 'num');
      break;

    case "pais":
      validateField(expressions.num, e.target, 'pais');
      break;
  }
};

var validateField = function validateField(expression, input, field) {
  if (expression.test(input.value)) {
    document.getElementById("".concat(field, "__group")).classList.remove('form_group-incorrect');
    document.querySelector("#".concat(field, "__group .form_fault_input")).classList.remove('form_fault_input-activ');
    fields[field] = true;
  } else {
    document.getElementById("".concat(field, "__group")).classList.add('form_group-incorrect');
    document.querySelector("#".concat(field, "__group .form_fault_input")).classList.add('form_fault_input-activ');
    fields[field] = false;
  }
};

inputs.forEach(function (input) {
  input.addEventListener('keyup', formValidate);
  input.addEventListener('blur', formValidate);
});
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (fields.name && fields.lastname && fields.job && fields.email && fields.num) {
    form.reset();
    document.getElementById('msj_success_form').classList.add('msj_success_form-activ');
    setTimeout(function () {
      document.getElementById('msj_success_form').classList.remove('msj_success_form-activ');
    }, 5000);
    document.getElementById('msj__form').classList.remove('msj__form-activ');
    ;
  } else {
    document.getElementById('msj__form').classList.add('msj__form-activ');
  }
});