const num=document.getElementById('a');
const num1=document.getElementById('b');
const num2=document.getElementById('c');
const num3=document.getElementById('d');
const num4=document.getElementById('e');
const m=document.getElementById('thank');

function bgchange(){
    resetColors();
    num.style.backgroundColor='white';
    num.style.color='black'
    rating=1;
}
function bgchange1(){
    resetColors();
    num1.style.backgroundColor='white';
    num1.style.color='black'
    rating=2;
}
function bgchange2(){
    resetColors();
    num2.style.backgroundColor='white';
    num2.style.color='black'
    rating=3;
}
function bgchange3(){
    resetColors();
    num3.style.backgroundColor='white';
    num3.style.color='black'
    rating=4;
}
function bgchange4(){
    resetColors();
    num4.style.backgroundColor='white';
    num4.style.color='black'
    rating=5;
}
function resetColors(){
    num.style.backgroundColor='';
    num1.style.backgroundColor='';
    num2.style.backgroundColor='';
    num3.style.backgroundColor='';
    num4.style.backgroundColor='';
}

function display(){
    const disEle=document.getElementById('display');
    disEle.textContent=`You selected ${rating} out of 5`;
    const container=document.querySelector('.container');
    container.style.display='none';
    m.style.display='block';
}