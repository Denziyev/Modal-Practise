const openbtn=document.getElementById("openbtn");
const closebtn=document.getElementById("closebtn");
const modalcon=document.getElementById("Modal-container")
const modal=document.getElementById("Modal")

openbtn.addEventListener("click",()=>{
 modalcon.style.display="flex";
});

closebtn.addEventListener("click",()=>{
    modalcon.style.display="none";
});

modalcon.addEventListener("click",()=>{
    modalcon.style.display="none";
});

modal.addEventListener("click",(e)=>{
   e.stopPropagation();
});

