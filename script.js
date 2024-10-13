
async function fetchData() {
    const news1 =  await fetch ("https://official-joke-api.appspot.com/random_joke");
    const record = await news1.json();

    document.getElementById("joke1p1").innerHTML = record.setup;
    document.getElementById("joke1p2").innerHTML = record.punchline;

    console.log(record)
    // document.getElementById("areaName").innerHTML=record.data[0].areaName;
    // document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    // document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}

let buttonClicked = document.getElementById("buttonClicked");
buttonClicked.addEventListener("click", ()=>{
    fetchData()
})


let actualDate = new Date();
let date = document.getElementById("date");

let timee = actualDate.getHours().toString()+":"+actualDate.getMinutes().toString()+":"+actualDate.getSeconds().toString();


date.innerHTML = "Date:- "+actualDate.getFullYear().toString() +"-"+ actualDate.getMonth().toString() + "-" + actualDate.getDate().toString() + " , Time:-  " + timee;

// console.log(timee)

setInterval(()=>{
    actualDate = new Date();
    date.innerHTML = "Date:- "+actualDate.getFullYear().toString() +"-"+ actualDate.getMonth().toString() + "-" + actualDate.getDate().toString() + " , Time:-  " + actualDate.getHours().toString()+":"+actualDate.getMinutes().toString()+":"+actualDate.getSeconds().toString();
    
}, 1000);

