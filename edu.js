document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("complete")
    }

})

const btn=document.getElementsByClassName('hamburger-2')[0];
const navbar=document.getElementsByClassName('side-nav')[0];
const move=document.getElementsByClassName('main-title')[0];
    btn.addEventListener('click',()=>{
        navbar.classList.toggle('active')
        move.classList.toggle('move')
    })


const main=document.getElementsByClassName(".main")
const nav=document.getElementsByClassName(".nav-line ")
const nbar=document.querySelector("a")
nbar.addEventListener('mouseover',(event)=>{
    event.target.style.backgroundColor="red"
})