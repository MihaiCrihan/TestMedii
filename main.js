function myFunction() {
    alert("I am an alert box!");
}
function getJson() {
    fetch('http://localhost:3000/students')
        .then(function (response) { return response.json(); })
        .then(function (data) { data; })["catch"](function (error) { return console.error(error); });
}
