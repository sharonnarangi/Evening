//An event listener listens for specific events to create interactive web pages
//events:Clicks,mouse hover
//addEventListener(event,callback)
const myBox = document.getElementById("myBox");
function changeColor(event){
        event.target.style.backgroundColor = "pink";
        event.target.textContent = "OUCH"
}
myBox.addEventListener('click',changeColor);