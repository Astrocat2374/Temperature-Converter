var c = [];	

for (fahrenheit = 20; fahrenheit <= 120; fahrenheit += 5){

	celsius = (fahrenheit - 32) * (5 / 9);
	celsius = Math.round(celsius * 100) / 100;
	c[fahrenheit] = celsius;

}