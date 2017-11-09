










var f = [];
var c = [];

for (farenheit = 20; farenheit < 120; farenheit+=5){
	
	function toCelcius(farenheit){
		return (farenheit-32) * (5/9);
		f[farenheit] = farenheit;
		c[farenheit] = toCelcius;
	}
	return f;
	return c;
}