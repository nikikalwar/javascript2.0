console.log("script is linked");

let input_characters=document.querySelector("#text_count");
//console.log(input_characters);

input_characters.addEventListener("keypress",countWords);
let max_limit=256;

function countWords(e){
    e.stopPropagation();
   // e.preventDefault();
    console.log(e.target.value);
    let my_string=e.target.value;
   // console.log(my_string.split(""))
    let strings_remaining=256-my_string.split("").length-1;
    console.log(strings_remaining)
    if(strings_remaining<1){
        alert("Maximum characters reached, please reduce the words")
    }

}


