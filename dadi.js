// let player = Math.floor( Math.random()* 7 )
// let pc = Math.floor( Math.random()* 7 )
// console.log(player)
// console.log(pc)

function play(){
    let player = Math.floor( Math.random()* 7 )
    console.log(player)
    
    let pc = Math.floor( Math.random()* 7 )
    console.log(pc)
    
    
   
    if(player > pc){
        console.log("il vincitore è il player")
        document.getElementById("winner").innerHTML =" il vincitore è il player"
    }else if(player < pc){
        console.log("il vinctiore è il computer")
        document.getElementById("winner").innerHTML =" il vincitore è il computer"
    }

    
}


