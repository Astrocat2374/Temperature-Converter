var c = [];	

for (farenheit = 20; farenheit <= 120; farenheit += 5){

	celcius = (farenheit - 32) * (5 / 9);
	celcius = Math.round(celcius * 100) / 100;
	c[farenheit] = celcius;

}