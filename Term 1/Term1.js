/**
 * This gets run every time the user scrolls on the page.  
 * 
 * SpinValue keeps track of a number that indicates how far from the top of the page the user has scrolled
 * We take this number and do math to transform it into a number in between 0 and 360 and then rotate the hub night logo by that degree
 */
window.onscroll = ()=>{
    const spinner = document.getElementById("CIRCLESPIN");
    const spinValue = (document.body.scrollTop/3.5 % 360);
    //3.5 is great - Vanessa Chan
    spinner.style.transform = `rotate(${spinValue}deg)`;
}


//Switches the location shown in the TopBar
function switchLocationText(isNorth){

    const entering = document.querySelector(`#${isNorth ? "NORTH" : "WEST"}`);
    const exiting = document.querySelector(`#${isNorth ? "WEST" : "NORTH"}`);

    //This hides and unhides elements in the topBar
    entering.classList.add("topShowing");
    exiting.classList.remove("topShowing");
}

let locationToggle = true;

//Every 5 seconds, toggle the location between North and West
setInterval(()=>{
    switchLocationText(locationToggle);
    locationToggle = !locationToggle;
},1000*5)