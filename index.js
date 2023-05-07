var screen = document.getElementById('screen');

function btnclick(value){
				screen.value += value;
}

function clearscreen(){
				screen.value ="";
}

function calculate(){


  try{
 				var result = eval(screen.value);
				screen.value = result;
}

catch(err){
				screen.value= "Math error";
}

}
function cancel(){
screen.value=screen.value.substr(0,screen.value.length-1);
}
function btndeci() {
				screen.value +=".";
}
