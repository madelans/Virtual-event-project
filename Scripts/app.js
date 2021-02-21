
function save_data() {
    let input = document.getElementById("name");
    localStorage.setItem("fn", input.value);
}

function load_data() {
    let input = document.getElementById("name");
    input.value= localStorage.getItem("fn");
}