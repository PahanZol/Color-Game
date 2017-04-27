var numSquares = 6;
var red = Math.floor(Math.random() * 255);
var green = Math.floor(Math.random() * 255);
var blue = Math.floor(Math.random() * 255);
var square = document.querySelectorAll(".square");
var msgDisplay = document.querySelector("#message")
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.getElementById("easyBtn");
var hardButton = document.getElementById("hardBtn");

easyButton.addEventListener("click", 
	function()
	{
		easyButton.classList.add("selected");
		hardButton.classList.remove("selected");
		numSquares = 3;
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i=0; i<square.length; i++)
		{
			if(colors[i])
			{
				square[i].style.background = colors[i];
			}
			else
				square[i].style.display="none";
		}
		h1.style.background = "steelblue";
	})

hardButton.addEventListener("click", 
	function()
	{
		hardButton.classList.add("selected");
		easyButton.classList.remove("selected");
		numSquares = 6;
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i=0; i<square.length; i++)
		{
			square[i].style.background = colors[i];
			square[i].style.display="block";
		}
		h1.style.background = "steelblue";
	})


reset.addEventListener("click", 
	function()
	{
		colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for (var i = 0; i < square.length; i++) 
		{
			square[i].style.background = colors[i];
		}
		h1.style.background = "steelblue";
		msgDisplay.textContent="";
		resetButton.textContent="New colors";
	})

for (var i = 0; i < square.length; i++) 
{
	square[i].style.background = colors[i];
	square[i].addEventListener("click", 
	function()
		{
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor)
			{
			msgDisplay.textContent = "Correct";
			h1.style.background = pickedColor;
			changeColor(pickedColor);
			resetButton.textContent="Play Again?";
			}
			else
			{ 
				this.style.background = "#2d2d2d";
				msgDisplay.textContent = "Try Again!";
			}
		})
}



function changeColor(color){
	for (var i = 0; i < square.length; i++) 
		square[i].style.background = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * numSquares);
	return colors[random];
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0; i<num; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}