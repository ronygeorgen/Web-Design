var firstNum
var secondNum
var operant
var count=0
function number(digit){
    if(count==0){
        document.getElementById('output').value+=digit
        firstNum=document.getElementById('output').value
        
        
    }
    
    if(count==1){
        document.getElementById('output').value+=digit
        secondNum=document.getElementById('output').value
        count=0
        
    }

}
function operatorClick(sign)
{
    document.getElementById('output2').value=sign
    operant=sign
    if(document.getElementById('output2').value==sign){
       clearDisplay()
        
    }
    if(document.getElementById('output').value==""){
        count=1
        number(digit)
    }
    
}
function equalsClick(){
    var result=firstNum+""+operant+""+secondNum
    var outResult=eval(result)
    document.getElementById('output').value=outResult
    
}
function clearDisplay(){
    document.getElementById('output').value=""
    count=0
}
function clearDisplayAll(){
    document.getElementById('output').value=""
    document.getElementById('output2').value=""
    firstNum=""
    secondNum=""
    operant=""
    count=0
}










// Given below is the simple code for calculation
// function equalsClick(){
//     var text = document.getElementById('output').value
//     var result = eval(text)
//     document.getElementById('output').value=result
// }
