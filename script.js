// "use strict";

var op1="";
var op2="";
var operand="";
var ans="";
var experession="";




var result=document.getElementById("result");
var zero=document.getElementById('zero');
var one=document.getElementById('one');
var two=document.getElementById('two');
var three=document.getElementById('three');
var four=document.getElementById('four');
var five=document.getElementById('five');
var six=document.getElementById('six');
var seven=document.getElementById('seven');
var eight=document.getElementById('eight');
var nine=document.getElementById('nine');



var plus=document.getElementById('plus');
var minus=document.getElementById('minus');
var divide=document.getElementById('divide');
var multiply=document.getElementById('multiply');
var percent=document.getElementById('percent');
var changeSign=document.getElementById('changeSign');
var equalTo=document.getElementById('equalTo');



function calculate(){

    // operand="+";
    if(operand=="/" && op2=="0"){
        result.innerText="Error";
        experession="";
        op1="";
        op2="";
        ans="";
        operand="";
    }
    else{
        ans=eval(op1+" "+operand+""+op2);
        var x=ans.toString().length ;
        if(x> 7){
            ans=ans.toFixed(3);
            x=ans.toString().length ;
            if(x>9){
                result.innerText="Large Ans";
                experession="";
                op1="";
                op2="";
                ans="";
                operand="";
            }
            else{
                result.innerText=ans;
                experession=ans;
                op1=ans;
                op2="";
                ans="";
                operand="";
            }
                

        }
        else{
            result.innerText=ans;
            experession=ans;
            op1=ans;
            op2="";
            ans="";
            operand="";
        }
 
    }
    

}


function input0(){
    if(operand==""){
        op1+="0";
        experession+="0"
        result.innerText=experession;
    }
    else{
        op2+="0"
        experession+="0";
        result.innerText=experession;
    }
}

function input1(){
    if(operand==""){
        op1+="1";
        experession+="1"
        result.innerText=experession;
    }
    else{
        op2+="1"
        experession+="1"
        result.innerText=experession;
       
    }
}

function input2(){
    if(operand==""){
        op1+="2";
        experession+="2"
        result.innerText=experession;
    }
    else{
        op2+="2"
        experession+="2";
        result.innerText=experession;
    }
}

function input3(){
    if(operand==""){
        op1+="3";
        experession+="3"
        result.innerText=experession;
    }
    else{
        op2+="3"
        experession+="3";
        result.innerText=experession;
    }
}

function input4(){
    if(operand==""){
        op1+="4";
        experession+="4"
        result.innerText=experession;
    }
    else{
        op2+="4"
        experession+="4";
        result.innerText=experession;
    }
}

function input5(){
    if(operand==""){
        op1+="5";
        experession+="5"
        result.innerText=experession;
    }
    else{
        op2+="5"
        experession+="5";
        result.innerText=experession;
    }
}

function input6(){
    if(operand==""){
        op1+="6";
        experession+="6"
        result.innerText=experession;
    }
    else{
        op2+="6"
        experession+="6";
        result.innerText=experession;
    }
}

function input7(){
    if(operand==""){
        op1+="7";
        experession+="7"
        result.innerText=experession;
    }
    else{
        op2+="7"
        experession+="7";
        result.innerText=experession;
    }
}

function input8(){
    if(operand==""){
        op1+="8";
        experession+="8"
        result.innerText=experession;
    }
    else{
        op2+="8"
        experession+="8";
        result.innerText=experession;
    }
}

function input9(){
    if(operand==""){
        op1+="9";
        experession+="9"
        result.innerText=experession;
    }
    else{
        op2+="9"
        experession+="9";
        result.innerText=experession;
    }
}

function inputOperandAdd(){
    operand="+";
    experession+="+"
    result.innerText=experession;
}
function inputOperandMinus(){
    operand="-";
    experession+="-"
    result.innerText=experession;
}
function inputOperandMultiply(){
    operand="*";
    experession+="x"
    result.innerText=experession;
}
function inputOperandDivide(){
    operand="/";
    experession+="/"
    result.innerText=experession;
}
function inputOperandPercent(){ 
    operand="*";
    op1=op1/100;
    experession+="%"
    result.innerText=experession;
}

function inputOperandChangeSign(){ 
    op1=-op1;
    experession=op1;
    result.innerText=experession;
}

function inputOperandDecimal(){ 
    if(operand==""){
        if(op1==""){
            op1="0.";
            experession="0."
        }
            
        else{
            op1+=".";
            experession+="."
        }
            
        result.innerText=experession;
    }
    else{
        if(op2==""){
            op2="0.";
            experession+="0."
        }
            
        else{
            op2+=".";
            experession+="."
        }
        result.innerText=experession;
    }
}


zero.addEventListener('click',input0);
one.addEventListener('click',input1);
two.addEventListener('click',input2);
three.addEventListener('click',input3);
four.addEventListener('click',input4);
five.addEventListener('click',input5);
six.addEventListener('click',input6);
seven.addEventListener('click',input7);
eight.addEventListener('click',input8);
nine.addEventListener('click',input9);


plus.addEventListener('click',inputOperandAdd);
minus.addEventListener('click',inputOperandMinus);
divide.addEventListener('click',inputOperandDivide);
multiply.addEventListener('click',inputOperandMultiply);
percent.addEventListener('click',inputOperandPercent);
changeSign.addEventListener('click',inputOperandChangeSign);
decimal.addEventListener('click',inputOperandDecimal);

equalTo.addEventListener('click',calculate);



// clear display
function clearDisplay(){
    result.innerText=0;
    op1="";
    op2="";
    ans="";
    experession=""
}
var allClear=document.getElementById("allClear");
allClear.addEventListener('click',clearDisplay);
