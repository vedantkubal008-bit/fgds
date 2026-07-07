let code="";

function makeCaptcha(){

const chars="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

code="";

for(let i=0;i<6;i++){

code+=chars[Math.floor(Math.random()*chars.length)];

}

document.getElementById("captcha").innerHTML=code;

}

makeCaptcha();

document.getElementById("refresh").onclick=makeCaptcha;

document.getElementById("submit").onclick=function(){

let entered=document.getElementById("input").value;

if(entered===code){

document.body.innerHTML=`
<img src="h.jpg"
style="
width:100vw;
height:100vh;
object-fit:contain;
background:white;
">
`;

}else{

document.getElementById("msg").innerHTML="Incorrect CAPTCHA";

makeCaptcha();

}

}
