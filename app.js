const items=document.querySelectorAll(".item");
const score=document.querySelector('#score');
const finish=document.createElement("button");
finish.classList.add("button","is-success");
finish.innerText="FINISH";
const restart=document.createElement("button");
restart.classList.add("button","is-danger");
restart.innerText="RESTART";
function playGame(){
    const img=document.createElement('img');
    img.src="mole.png";
    img.classList.add('trans');
    let rand =Math.floor(Math.random()*9);
    img.addEventListener("click",e=>{
        score.innerText++;
        img.remove();
    })
    if(items[rand].innerHTML==""){
        items[rand].appendChild(img);
        setTimeout(()=>{
            img.remove();
        },800)}
    
}
const start=document.querySelector('#start');
start.addEventListener('click',e=>{
    start.remove();
    document.body.appendChild(finish);
    startGame=setInterval(playGame,500);
})
finish.addEventListener('click',e=>{
    finish.remove();
    document.body.appendChild(restart);
    clearInterval(startGame);
})
restart.addEventListener('click',e=>{
    restart.remove();
    document.body.appendChild(start);
    clearInterval(startGame);
    score.innerText=0;
})
