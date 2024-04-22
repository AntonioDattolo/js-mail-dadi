

function play(){
    let player = Math.ceil( Math.random() * 6  );
    console.log(`player con ${player}`);
    let pc = Math.ceil( Math.random()* 6 );
    console.log(`pc con ${pc}`);
    
    if(player > pc){
        console.log(`il vincitore è il player con ${player}`);
        document.getElementById("player").innerHTML = `${player}`;
        document.getElementById("pc").innerHTML = `${pc}`;
        document.getElementById("winner").innerHTML =" il vincitore è il player";
    }else if(player < pc){
        console.log(`il vinctiore è il computer con ${pc}`);
        document.getElementById("player").innerHTML = `${player}`;
        document.getElementById("pc").innerHTML = `${pc}`;
        document.getElementById("winner").innerHTML =" il vincitore è il computer";
    }else if (player = pc){
        console.log(`PAREGGIO`);
        document.getElementById("player").innerHTML = `${player}`;
        document.getElementById("pc").innerHTML = `${pc}`;
        document.getElementById("winner").innerHTML =" Il risultato è di pareggio";
    }
}


