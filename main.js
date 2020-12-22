// calculate project
function fontSize(){
//        console.log(elevale.length);
    const vallength = document.querySelector('#content');
    // resize the font size
    if(vallength.innerHTML.length <= 10){
        vallength.style.fontSize = '3em';
    }
    // select the element content
    // resize the font size
    if(vallength.innerHTML.length >= 11 && vallength.innerHTML.length < 21 ){
        vallength.style.fontSize = '2em';
    }
    // resize the font size
    if(vallength.innerHTML.length >= 21){
        vallength.style.fontSize = '1em';
    }
    // set the initial value if empty
    if(vallength.innerHTML.length <= 0 ){
        vallength.innerHTML = "0";
    }
}

function setValue(value,selector,bool){
    if(bool == false){
        return document.querySelector(selector).innerHTML = value;
    }else{
        return document.querySelector(selector).innerHTML += value;
    }
}

function equal(value){
    return eval(value);
}

function calculate(){
    // get the value of key
    const elevale = this.innerHTML;
    // select the content
    let content = document.querySelector('#content').innerHTML;
    let final = document.querySelector('.final').innerHTML;
    let point = document.querySelector('.static').innerHTML;
    let exp;

    // when click number
    if(elevale.match(/[0-9]/g)){
        fontSize();
        // when the value is operator
        if(elevale.match(/[1-9]/g) && !content.match(/[0-9]/g)){
            // add content to calculation
            let finalValue = setValue(content, ".final", true) ;
            // show the new value
            setValue(elevale, "#content", false);
//            console.log(finalValue);
            }
        // when click number = 0
        if(elevale == "0" && !content.match(/[0-9]/g)){
            // the content to calculation
            setValue(content, ".final", true) ;
            // show new value
            setValue(elevale, "#content", false);
            }
        if(elevale.match(/[0-9]/g) && content.match(/[0-9]/g) && content != "0"){
            setValue(elevale, "#content", true);
            }
        // check the value is not empty
        if((content == "0" || (!elevale.match(/[0-9]/g ))) ){
            // set new content
            setValue(elevale,'#content',false);
            // the value is not a 0
        }else if(content == "0" && elevale.match(/[0-9]/g )){
            // add the numbet to content 
            setValue(elevale,'#content',false);
        }
        // clear the content
    }else 
    if(elevale == "."){
        if ((content.match(/[0-9]/g)) && point != ".") {
            setValue(".", "#content", true);
            setValue(".", ".static", false);
        } else if(content.match(/(\+|-|\*|\/)$/g) && point != "."){
            setValue(content, ".final", true) ;
            setValue("0.", "#content", false);
            setValue(".", ".static", false);
        }
         point = false;
    }else 
    if(elevale == "CE" ){
        // set the initial value '0'
        setValue("0",'#content',false);
        setValue("", ".static", false);
        setValue("", ".final", false) ;
    }else 
    if(elevale.length == 7){
        if(content.length >= 2){
        // select and split the content "convert string to array"
        setValue("", ".static", false);
        let val = document.querySelector('#content').innerHTML.split('');
        // remove the last number
        val.pop();
        // convert array to string
        exp = val.join('');
        // set the in content value
        setValue(exp,'#content',false);
//        console.log(exp);
        }else if(content.length <= 1){
            setValue("0", "#content", false);
        }
        // when click the operator button
    }else 
    if(elevale.match(/(\+|-|\*|\/)$/g)){
        // clear the static 
        setValue("", ".static", false);
        // check if it not a zero
        if(content.match(/[1-9]/)){
            // set on final
            setValue(content, ".final", true) ;
            // show
            setValue(elevale,'#content',false);
            // when it zero
        }else {
            setValue(elevale, "#content", false);
        }
        // the equal 
    }else 
    if(elevale =="=" && content.match(/[1-9]/) && final.match(/(\+|-|\*|\/)$/g)){
        let finalValue = document.querySelector('.final').innerHTML ;
        let cont = setValue(content, "#content", false) ;
        let equals = finalValue + cont;

        setValue(eval(equals),'#content',false);
        setValue("", ".final", false)
        // change the font size
        fontSize();
        }
    if(content.length <= 0){
        setValue("0", "#content", false);
    }
    }

    function hoverStyle(){
        const ele = this.innerHTML;
        if(ele.match(/CE|X/))
        this.style.cssText = "background: #d0b1b6;color: red;border: 2px solid red;"
        if(ele.match(/(\+|-|\*|\/)$/g))
        this.style.cssText = "background: #2977e4;border: 3px solid #47e7eb;color: white"
        if(ele.match(/[0-9]|\.|\=/))
        this.style.cssText = "background: #b9e88b;border: 3px solid #316705;color: white"
        }
    function outStyle(){
    this.style.cssText = "background: rgb(197, 193, 193);color: black"
    }
    function clickStyle(){
    const ele = this.innerHTML;
    if(ele.match(/CE|X/))
    this.style.cssText = "background: #fad5d5;color: red;border: 2px solid red;"
    if(ele.match(/(\+|-|\*|\/)$/g))
    this.style.cssText = "background: #81f7d4;border: 3px solid #47e7eb;color: white"
    if(ele.match(/[0-9]|\.|\=/))
    this.style.cssText = "background: #12ea0b;border: 3px solid #316705;color: white"
}
// select the buttons
const button = document.querySelectorAll('button');
// get the value of button when click
button.forEach(button => button.addEventListener('click',calculate))
button.forEach(button => button.addEventListener('mouseover',hoverStyle))
button.forEach(button => button.addEventListener('mouseout',outStyle))
button.forEach(button => button.addEventListener('click',clickStyle))

