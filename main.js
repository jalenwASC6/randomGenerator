document.addEventListener("keydown", displayData);
i = 0;
function displayData() {
    let get = data.results[i]
    let firstName = get.name.first;
    let lastName = get.name.last;
    let email = get.email;
    let cellNumber = get.cell;
    let userName = get.login.username;
    let password = get.login.password;
    document.getElementById("name").innerHTML = "Name: " + firstName + " " + lastName;
    document.getElementById("cell").innerHTML = "Cell Phone Number: " + cellNumber;
    document.getElementById("email").innerHTML = "E-mail: " + email;
    document.getElementById("userName").innerHTML = "User Name: " + userName;
    document.getElementById("password").innerHTML = "Password: " + password;
    i++;
    if(i == data.results.length) {
        i = 0;
    }
}