let spinTrack = 0;

window.onscroll = ()=>{
    const spinner = document.getElementById("CIRCLESPIN");
    const spinValue = (document.body.scrollTop/3.5 % 360);
    //3.5 is great - Vanessa Chan
    spinner.style.transform = `rotate(${spinValue}deg)`;
    spinTrack = spinValue;
}



//If not northern beaches, must be west
function switchLocationText(isNorth){

    const entering = document.querySelector(`#${isNorth ? "NORTH" : "WEST"}`);
    const exiting = document.querySelector(`#${isNorth ? "WEST" : "NORTH"}`);


    entering.classList.add("topShowing");
    exiting.classList.remove("topShowing");
}

let locationToggle = true;
setInterval(()=>{
    switchLocationText(locationToggle);
    locationToggle = !locationToggle;
},1000*5)