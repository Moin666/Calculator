// var textValue = document.querySelector("input");

function getValueBtn(num){
            // console.log(num)
        // return    textValue.value = textValue.value + num
            // console.log(textValue.value )
}


// function calculate (pressKey){

//         if(pressKey == "="){



//         }



// }


var buttons = document.querySelectorAll("button");
var textValue = document.querySelector("input");




// var names = "mynameis";
// var arr = names.split('')
// var nameString = arr.join("")
// console.log(arr)

// console.log(typeof(textValue.value))




var a =12;
var b = 13;

var d = eval("(1 * 3) - 3 + 2 + 2")
console.log(d)

buttons.forEach(function(button){
        button.addEventListener('click',function(){
        console.log(button.innerText)
        calculate(button.innerText)
        })
})

// function calculate(button){
//     if(button == "="){
//         textValue.value = eval(textValue.value);   

//     }
//     else if(button == "c"){
//         textValue.value = ""
//     }
//     else if(button == "back"){
//         var arr = textValue.value.split('')
//         arr[arr.length -1] = "";
//         textValue.value  =  arr.join("")
//         console.log(textValue.value)
//     }
//     else{
//         textValue.value = textValue.value + button;
//         console.log(textValue.value)
//     }
// }

function calculate(button){

switch(button){
    case "=":
        textValue.value = eval(textValue.value);   
        break;
    case "c":
            textValue.value = "";
            break
    case "back":
        var arr = textValue.value.split("");
        arr[arr.length -1] = "";
        textValue.value = arr.join("")
        break
    default:
        textValue.value = textValue.value + button;

}
}