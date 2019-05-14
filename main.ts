function myFunction() {
    alert("I am an alert box!");
  }
function getJson() {
    fetch('http://localhost:3000/students')
        .then(response => response.json())
        .then(data => { data})
        .catch(error => console.error(error))
}