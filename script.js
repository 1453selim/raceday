 /* var age = prompt(`Enter your age: `);
var regTime;
if(age<18){
    console.log(`Your race will start at 12.30 pm\nYour race number is ${Math.floor(Math.random() * 1000)}`);
} else {
    regTime = prompt(`Have you registered early? Enter Y/N: `);
    if(age>18 && regTime==='Y'){
        console.log(`Your race will start at 9.30 am\nYour race number is ${Math.floor((Math.random()+1)*1000)}`);
    } else if (age>18 && regTime==='N'){
        console.log(`Your race will start at 11.00 pm\nYour race number is ${Math.floor(Math.random()*1000)}`);
    } else {
        console.log('Please visit reception');
    }
} */


var age = prompt("enter your age")
var raceTime ;
if (age <18) {
    console.log(`your race will start at 12:30 pm and your race number is ${Math.floor(Math.random()*1000)}`)
}else {
    raceTime =prompt("have you registered early ? enter yes or no")
    if(age>18 && raceTime==="yes") {
        console.log(`you race will start at 9:30 am and your race number is ${Math.floor(Math.random()*1000)}`);
    } else if (age>18 && raceTime==="no") {
        console.log(`your race will start at 11 pm and your race number is ${Math.floor(Math.random()*1000)}`);

    }else {
        console.log("ask again to organizator")
    }     
}
