const display = document.querySelector("#display");
const previousValue = document.querySelector("#previousValue");
const AC = document.querySelector("#cleanAll");
const changeSign = document.querySelector("#changeSign");
const perc = document.querySelector("#perc");
const div = document.querySelector("#div");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const mul = document.querySelector("#mul");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const min = document.querySelector("#min");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const plus = document.querySelector("#plus");
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const equal = document.querySelector("#equal");



let a, b;
let sign;
let equalState = false;

one.addEventListener("click", () =>{
	if(display.textContent == "0" || display.textContent == "Error" || equalState == true){
		display.textContent = "1";
		equalState = false;
	}
	else
		display.textContent += "1";
})

two.addEventListener("click", () =>{
	if(display.textContent == "0" || display.textContent == "Error" || equalState == true){
		display.textContent = "2";
		equalState = false;
	}
		
	else
		display.textContent += "2";
})

three.addEventListener("click", () =>{
	if(display.textContent == "0" || display.textContent == "Error" || equalState == true){
		display.textContent = "3";
		equalState = false;
	}
		
	else
		display.textContent += "3";
})

four.addEventListener("click", () =>{
	if(display.textContent == "0" || display.textContent == "Error" || equalState == true){
		display.textContent = "4";
		equalState = false;
	}
		
	else
		display.textContent += "4";
})

five.addEventListener("click", () =>{
	if(display.textContent == "0" || display.textContent == "Error" || equalState == true){
		display.textContent = "5";
		equalState = false;
	}
		
	else
		display.textContent += "5";
})

six.addEventListener("click", () =>{
	if(display.textContent == "0" || display.textContent == "Error" || equalState == true){
		display.textContent = "6";
		equalState = false;
	}
		
	else
		display.textContent += "6";
})

seven.addEventListener("click", () =>{
	if(display.textContent == "0" || display.textContent == "Error" || equalState == true){
		display.textContent = "7";
		equalState = false;
	}
		
	else
		display.textContent += "7";
})

eight.addEventListener("click", () =>{
	if(display.textContent == "0" || display.textContent == "Error" || equalState == true){
		display.textContent = "8";
		equalState = false;
	}
		
	else
		display.textContent += "8";
})

nine.addEventListener("click", () =>{
	if(display.textContent == "0" || display.textContent == "Error" || equalState == true){
		display.textContent = "9";
		equalState = false;
	}
		
	else
		display.textContent += "9";
})

zero.addEventListener("click", () =>{
	if(display.textContent == "0" || display.textContent == "Error" || equalState == true){
		display.textContent = "0";
		equalState = false;
	}
		
	else
		display.textContent += "0";
})

dot.addEventListener("click", () =>{
	if(!display.textContent.slice("").includes("."))
		if(display.textContent == "0" || equalState == true ||display.textContent == ""){
			display.textContent = "0.";
			equalState = false;
		}
		else
			display.textContent += ".";
})

changeSign.addEventListener("click", ()=>{
	if(display.textContent.slice("").includes("-")){
		display.textContent = display.textContent.slice(1);
	}
	else if(display.textContent != "0"){
		display.textContent = "-" + display.textContent;
	}
})

plus.addEventListener("click", ()=>{
	if(previousValue.textContent == ""){
		a = Number(display.textContent);
		sign = "plus";
		display.textContent = "";
		previousValue.textContent = a + "+";
	}
})

min.addEventListener("click", ()=>{
	if(previousValue.textContent == ""){
		a = Number(display.textContent);
		sign = "min";
		display.textContent = "";
		previousValue.textContent = a + "-";
	}
})

mul.addEventListener("click", ()=>{
	if(previousValue.textContent == ""){
		a = Number(display.textContent);
		sign = "mul";
		display.textContent = "";
		previousValue.textContent = a + "*";
	}
})

div.addEventListener("click", ()=>{
	if(previousValue.textContent == ""){
		a = Number(display.textContent);
		sign = "div";
		display.textContent = "";
		previousValue.textContent = a + "/";
	}
})

perc.addEventListener("click",()=>{
	a = Number(display.textContent);
	display.textContent = "";
	display.textContent = parseFloat(a / 100);
})

equal.addEventListener("click", () =>{
	equalState = true;
	if(sign === "plus"){
		b = Number(display.textContent);
		console.log(a);
		display.textContent = "";
		display.textContent = a + b;
		previousValue.textContent = "";
	}
	else if(sign === "min"){
		b = Number(display.textContent);
		display.textContent = "";
		display.textContent = a - b;
		previousValue.textContent = "";
	}
	else if(sign=="mul"){
		b = Number(display.textContent);
		display.textContent = "";
		display.textContent = a * b;
		previousValue.textContent = "";
	}
	else if(sign=="div"){
		b = Number(display.textContent);
		display.textContent = "";
		if(b === 0){
			display.textContent = "Error";
			previousValue.textContent = "";
		}
		else{
			console.log(parseFloat(a / b));
			display.textContent = Math.floor(parseFloat(a / b)*100000000)/100000000;
			previousValue.textContent = "";
		}
	}
})

AC.addEventListener("click", ()=>{
	display.textContent = "0";
	previousValue.textContent = "";
})