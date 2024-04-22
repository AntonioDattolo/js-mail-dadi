
let listaMail = [
    "antonio@ciao.it",
    "paolo@ciao.it",
    "haloa@ciao.com"
];
console.log(listaMail)

let a = listaMail[length]


function login() {

    let x = document.getElementById("mail").value
    if (x != a) {
        console.log("false")
        document.getElementById("result").innerHTML = "ACCESS DENIED"
    } else if (x = a) {
        console.log("true")
        document.getElementById("result").innerHTML = "ACCESS GRANTED"
    }

}   



