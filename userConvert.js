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