var c = [];	

for (farenheit = 20; farenheit <= 120; farenheit += 5){

	celcius = (farenheit - 32) * (5 / 9);
	celcius = Math.round(celcius * 100) / 100;
	c[farenheit] = celcius;

}

function userConvert() {
	var temp = document.getElementByID("temp");
	var unit = document.getElementByID("convert");

	if unit === "celcius"{
		convertedtemp = (temp - 32) * (5 / 9);
		convertedtemp = Math.round(convertedTemp * 100) / 100;
	} else if unit === "farenheit"{
		convertedtemp = (temp - 32) * (5 / 9);
		convertedtemp = Math.round(convertedTemp * 100) / 100;
	}
}