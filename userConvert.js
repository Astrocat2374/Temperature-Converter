function userConvert() {
	var temp = document.getElementByID("temp");
	var unit = document.getElementByID("convert");

	if unit === "celcius"{
		toConvertedtemp = (temp - 32) * (5 / 9);
		toConvertedtemp = Math.round(toConvertedTemp * 100) / 100;
	} else if unit === "farenheit"{
		toConvertedtemp = (temp - 32) * (5 / 9);
		toConvertedtemp = Math.round(toConvertedTemp * 100) / 100;
	}
	var convertedTemp = toConvertedTemp
}