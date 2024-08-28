////////////////////////////////////////////////////////
//----BMI---//
let h;
let k;
let bmi;
let p = document.getElementById("bmita");
document.getElementById("sub").onclick = function () {
	h = document.getElementById("hhh").value;
	k = document.getElementById("kkk").value;
	bmi = k / h ** 2;

	document.getElementById("bmi").textContent = `your bmi is ${bmi.toFixed(2)}`;

	if (h === "" && k === "") {
		p.textContent = "please input Data";
	} else if (h === "") {
		p.textContent = "please input height";
	} else if (k === "") {
		p.textContent = "please input weight";
	} else {
		if (bmi > 24.9) {
			p.textContent = "you are over weight";
		} else if (bmi >= 18.5 && bmi <= 24.9) {
			p.textContent = "Heathy Weight";
		} else if (18.5 > bmi) {
			p.textContent = "you are under weight";
		}
	}
};

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
//----Circumference---//

let r;
let Circumference;

document.getElementById("subm").onclick = function () {
	r = document.getElementById("radius").value;
	Circumference = 2 * Math.PI * r;
	document.getElementById(
		"rad"
	).textContent = `The Circumference is ${Circumference.toFixed(2)}`;
};

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// number counter

const resate = document.getElementById("resate");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const start = document.getElementById("Start");

let count = 0;

document.getElementById("oo").textContent = `${count}`;

resate.onclick = function () {
	count = 0;
	document.getElementById("oo").textContent = `${count}`;
};

start.onclick = function () {
	if (count <= 0) {
		let interval = setInterval(() => {
			count++;
			document.getElementById("oo").textContent = `${count}`;
			if (count >= 0) {
				clearInterval(interval);
			}
		}, 1000);
	} else if (count >= 0) {
		let interval = setInterval(() => {
			count--;
			document.getElementById("oo").textContent = `${count}`;
			if (count <= 0) {
				clearInterval(interval);
			}
		}, 1000);
	} else {
	}
};

increase.onclick = function () {
	count++;
	document.getElementById("oo").textContent = `${count}`;
};

decrease.onclick = function () {
	count--;
	document.getElementById("oo").textContent = `${count}`;
};

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// Dice Roller //

const roll = document.getElementById("roll");
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

roll.onclick = function () {
	first = Math.ceil(Math.random() * 6);
	r1.textContent = `${first}`;

	sec = Math.ceil(Math.random() * 6);
	r2.textContent = `${sec}`;

	the = Math.ceil(Math.random() * 6);
	r3.textContent = `${the}`;
};

////////////////////////////////////////////////////////

const subs = document.getElementById("subscribe");
const paymentM = document.querySelectorAll("#radio");
const subm = document.getElementById("suuu");
const text = document.getElementById("text");
const textp = document.getElementById("textp");

subm.onclick = function () {
	if (subs.checked) {
		text.textContent = "you are subscribed";
	} else {
		text.textContent = "you are not subscribed";
	}
	paymentM.forEach((Element) => {
		let checkerarray = [Element];
		if (!Element.checked) {
			let nopayarray = [Element];
			if (nopayarray.length === checkerarray.length) {
				textp.textContent = "please select one of the payment method";
			}
		}
	});
	pay();
	function pay() {
		paymentM.forEach((Element) => {
			if (Element.checked) {
				textp.textContent = "you are paying with " + Element.value;
			}
		});
	}
};

////////////////////////////////////////////////////////
//----tax---//

let i1;
let i2;
let i3;
let i4;
let plus;
let value;
let taxi;

document.getElementById("subtax").onclick = function () {
	let i1 = document.getElementById("i1").value;
	let i2 = document.getElementById("i2").value;
	let i3 = document.getElementById("i3").value;
	let i4 = document.getElementById("i4").value;
	let taxi = document.getElementById("inptax").value;

	i1 = Number(i1);
	i2 = Number(i2);
	i3 = Number(i3);
	i4 = Number(i4);
	taxi = Number(taxi);

	plus = i1 + i2 + i3 + i4;

	value = plus + (taxi * plus) / 100;

	document.getElementById("tata").textContent = `${value.toFixed(2)}`;
};
////////////////////////////////////////////////////////
/////////sum///////////
let pressholder = document.getElementById("pressholder");
function addtoinput(button) {
	pressholder.value += button;
}

function calc() {
	try {
		let calculater = eval(pressholder.value);
		pressholder.value = calculater;
	} catch (error) {
		pressholder.value = "Math error";
	}
}
document.getElementById("clear").onclick = function () {
	pressholder.value = "";
};
////////////////////////////////////////////////////////
/////////sum///////////
// script.js
function calculatefact() {
	const numberfact = parseFloat(document.getElementById("numberfact").value);
	let array = [];
	for (i = 1; i <= numberfact; i++) {
		let num = i;
		array.push(num);
	}

	let factoryal = array.reduce(multiply);
	document.getElementById("resultfact").textContent = "Result: " + factoryal;

	function multiply(acc, element) {
		return acc * element;
	}
}

function Convert() {
	const measurementsfrom = document.getElementById("measurementsfrom").value;
	const measurementsto = document.getElementById("measurementsto").value;
	let Numberinput = parseFloat(document.getElementById("Numberinput").value);
	let Returnvalue = document.getElementById("Returnvalue");
	if (measurementsfrom === measurementsto) {
		Returnvalue.value = Numberinput;
	} else if (measurementsfrom == "Kilometers" && measurementsto == "Miles") {
		Returnvalue.value = Numberinput * 1.60934;
	} else if (measurementsfrom == "Miles" && measurementsto == "Kilometers") {
		Returnvalue.value = Numberinput / 1.60934;
	} else if (measurementsfrom == "Kilometers" && measurementsto == "inch") {
		Returnvalue.value = Numberinput * 39370.1;
	} else if (measurementsfrom == "inch" && measurementsto == "Kilometers") {
		Returnvalue.value = Numberinput / 39370.1;
	} else if (measurementsfrom == "cm" && measurementsto == "Kilometers") {
		Returnvalue.value = Numberinput / 100000;
	} else if (measurementsfrom == "Kilometers" && measurementsto == "cm") {
		Returnvalue.value = Numberinput * 100000;
	}else if (measurementsfrom == "mm" && measurementsto == "Kilometers") {
		Returnvalue.value = Numberinput / 1000000;
	}else if (measurementsfrom == "Kilometers" && measurementsto == "mm") {
		Returnvalue.value = Numberinput * 1000000;
	} else if (measurementsfrom == "Miles" && measurementsto == "inch") {
		Returnvalue.value = Numberinput * 63360;
	} else if (measurementsfrom == "inch" && measurementsto == "Miles") {
		Returnvalue.value = Numberinput / 63360;
	}else if (measurementsfrom == "Miles" && measurementsto == "cm") {
		Returnvalue.value = Numberinput * 160934;
	}else if (measurementsfrom == "cm" && measurementsto == "Miles") {
		Returnvalue.value = Numberinput / 160934;
	}else if (measurementsfrom == "Miles" && measurementsto == "mm") {
		Returnvalue.value = Numberinput * 1.609e+6;
	}else if (measurementsfrom == "mm" && measurementsto == "Miles") {
		Returnvalue.value = Numberinput / 1.609e+6;
	}else if (measurementsfrom == "inch" && measurementsto == "cm") {
		Returnvalue.value = Numberinput * 2.54;
	}else if (measurementsfrom == "cm" && measurementsto == "inch") {
		Returnvalue.value = Numberinput / 2.54;
	}else if (measurementsfrom == "inch" && measurementsto == "mm") {
		Returnvalue.value = Numberinput * 25.4;
	}else if (measurementsfrom == "mm" && measurementsto == "inch") {
		Returnvalue.value = Numberinput / 25.4;
	}else if (measurementsfrom == "cm" && measurementsto == "mm") {
		Returnvalue.value = Numberinput * 10;
	}else if (measurementsfrom == "mm" && measurementsto == "cm") {
		Returnvalue.value = Numberinput / 10;
	}
}

//-------------------------------------------------------------------------------------------

function calculateGrade() {
	const marks = document.getElementById("marks").value;
	let grade;

	if (marks >= 90) {
		grade = "A+";
	} else if (marks >= 80) {
		grade = "A";
	} else if (marks >= 70) {
		grade = "B";
	} else if (marks >= 60) {
		grade = "C";
	} else if (marks >= 50) {
		grade = "D";
	} else if (marks >= 40) {
		grade = "E";
	} else {
		grade = "F";
	}

	document.getElementById(
		"resultGrade"
	).textContent = `Your Grade is: ${grade}`;
}
//------------------------------------------------------------
//----------------------------------------------------------------------
document.getElementById("convert-btn").onclick = function () {
	const numberInput = document.getElementById("number-input");
	const result = document.getElementById("result");
	if (isNaN(numberInput.value)) {
	} else {
		let input = numberInput.value
		let array = [];
		while (input > 0) {
			let q = Math.floor(input / 2)
			array.push(input % 2)
			input = q
		}
		x = array.reverse().join("");
		result.textContent = x;
	}
}
