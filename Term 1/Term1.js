let spinTrack = 0;

window.onscroll = ()=>{
    const spinner = document.getElementById("CIRCLESPIN");
    const spinValue = (document.body.scrollTop/5 % 360);
    spinner.style.transform = `rotate(${spinValue}deg)`;
    spinTrack = spinValue;
}
