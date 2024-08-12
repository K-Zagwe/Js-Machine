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
		}, 500);
	} else if (count >= 0) {
		let interval = setInterval(() => {
			count--;
			document.getElementById("oo").textContent = `${count}`;
			if (count <= 0) {
				clearInterval(interval);
			}
		}, 500);
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
const visa = document.getElementById("visa");
const mc = document.getElementById("mc");
const pay = document.getElementById("paypal");
const subm = document.getElementById("suuu");
const text = document.getElementById("text");
const textp = document.getElementById("textp");

subm.onclick = function () {
	if (subs.checked) {
		text.textContent = "you are subscribed";
	} else {
		text.textContent = "you are not subscribed";
	}

	if (visa.checked) {
		textp.textContent = "you are paying with visa";
	} else if (mc.checked) {
		textp.textContent = "you are paying with master card";
	} else if (pay.checked) {
		textp.textContent = "you are paying with paypal";
	} else {
		textp.textContent = "select a payment type or you may be broke???";
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
// script.js
function calculateSum() {
	const number1 = parseFloat(document.getElementById("number1").value);
	const number2 = parseFloat(document.getElementById("number2").value);

	if (isNaN(number1) || isNaN(number2)) {
		document.getElementById("result").innerText = "Please enter valid numbers";
	} else {
		const sum = number1 + number2;
		document.getElementById("result").innerText = "Result: " + sum;
	}
}

////////////////////////////////////////////////////////////

let mile;
let km;
let submile = document.getElementById("submile");

submile.onclick = function () {
	mile = document.getElementById("valuemile").value;
	b = mile * 1.6;
	document.getElementById("km").textContent = `${b.toFixed(2)}km`;
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
    document.getElementById('resultfact').textContent = 'Result: ' + factoryal;

	function multiply(acc, element) {
		return acc * element;
	}
}







function convertMilesToKm() {
    const miles = parseFloat(document.getElementById('miles').value);
    if (isNaN(miles)) {
        document.getElementById('milesToKmResult').innerText = 'Please enter a valid number.';
        return;
    }
    const km = miles * 1.60934;
    document.getElementById('milesToKmResult').innerText = `${miles} miles is equal to ${km.toFixed(2)} kilometers.`;
}

function convertKmToMiles() {
    const km = parseFloat(document.getElementById('kilometers').value);
    if (isNaN(km)) {
        document.getElementById('kmToMilesResult').innerText = 'Please enter a valid number.';
        return;
    }
    const miles = km / 1.60934;
    document.getElementById('kmToMilesResult').innerText = `${km} kilometers is equal to ${miles.toFixed(2)} miles.`;
}





function calculateGrade() {
    const marks = document.getElementById('marks').value;
    let grade;

    if (marks >= 90) {
        grade = 'A+';
    } else if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 70) {
        grade = 'B';
    } else if (marks >= 60) {
        grade = 'C';
    } else if (marks >= 50) {
        grade = 'D';
    } else if (marks >= 40) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerText = `Your grade is: ${grade}`;
}






























