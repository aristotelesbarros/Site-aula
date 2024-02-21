const modal_overlay = document.querySelector ('.modal_overlay');
const cards = document.querySelectorAll ('.card');
for (let card of cards){
    card.addEventListener ("click", function(){
        const videoid=card.getAttribute ("id");
        modal_overlay.classList.add('active')
        modal_overlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoid}`;
    })
}
document.querySelector ('.close_modal').addEventListener("click",function(){
    modal_overlay.classList.remove("active")
})

let count= 1;
document.getElementById("radio1").checked = true;
setInterval(function(){
    nextimage();

}, 2000 )

function nextimage(){
    count++;
    if(count>4){
        count = 1;

    }
    document.getElementById("radio"+count).checked = true;
    
}
