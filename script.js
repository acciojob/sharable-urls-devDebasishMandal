// your code here
let head=document.getElementById("url");
head.textContent="https://localhost:8080/";
let btn=document.getElementById("btn");
let nam,year;
btn.addEventListener("click",(e)=>{
    e.preventDefault();
     nam=document.getElementById("name").value;
     year=document.getElementById("year").value;
});

if(nam && year){
    head.textContent=`https://localhost:8080/?name=${nam}&year=${year}`;
}else if(nam){
    head.textContent=`https://localhost:8080/?name=${nam}`;
} else if(year){
    head.textContent=`https://localhost:8080/?year=${year}`;
}