
const listaMail =  [
    "antonio@ciao.it",
    "paolo@ciao.it",
    "haloa@ciao.com"
];
console.log(listaMail)

function login() {
    
    
    let user = document.getElementById("mail").value
    for(let i = 0; i < listaMail.length; i ++) {
        let a = listaMail[i] 
        if (user == a) {
            console.log("true")
            document.getElementById("result").innerHTML = "ACCESS GRANTED";
            break;
        }
        if (user !== a) {
            console.log("false")
            document.getElementById("result").innerHTML = "ACCESS DENIED"
            alert("errato")
            break
        }
      
    }
        
}


