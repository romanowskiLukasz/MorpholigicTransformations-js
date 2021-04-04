window.onload=start;


function Create2DArray(rows,columns) {
   var x = new Array(rows);
   for (var i = 0; i < rows; i++) {
       x[i] = new Array(columns);
   }
   return x;
}

var array2d;
array2d= Create2DArray(9,9);
for(i=0;i<9;i++)
{
	for(j=0;j<9;j++)
	array2d[i][j]=0;
}
function start()
{
	var trescDiva="";
	var firstValue=0;
	var secondValue=0;
	
	for(i=0;i<81;i++)
	{
		
		var element="";
		if(secondValue>=9) 
		{
			firstValue++;
			secondValue=0;
		}
		element="p"+firstValue+secondValue;
		secondValue++;
		trescDiva+='<div class="pixel" onclick = "clickPixel(\''+element+'\')" id="' + element + '"></div>'
		if((i+1)%9==0 ) trescDiva=trescDiva+'<div style="clear:both;"></div>';
		
	}
	$('.board').html(trescDiva);
	
}



function clickPixel(nr)
{
	if (document.getElementById(nr).style.backgroundColor === "rgb(128, 128, 128)") 
	{
		document.getElementById(nr).style.backgroundColor = "rgb(211, 211, 211)";
		array2d[nr.charAt(2)][nr.charAt(1)]=0;
	}
	else  
	{
		document.getElementById(nr).style.backgroundColor = "rgb(128, 128, 128)";
		array2d[nr.charAt(1)][nr.charAt(2)]=1;
	}
}

var inwersja = document.getElementById('inwersja');

inwersja.addEventListener("click", function() { clickInwersja(); });

function clickInwersja()
{
	var firstValue=0;
	var secondValue=0;
	for(i=0;i<81;i++)
	{
		
		var element="";
		if(secondValue>=9) 
		{
			firstValue++;
			secondValue=0;
		}
		element="p"+firstValue+secondValue;
		secondValue++;
		var colorValue="rgb(211, 211, 211)";
		if (document.getElementById(element).style.backgroundColor === "rgb(128, 128, 128)") 
		{
			document.getElementById(element).style.backgroundColor = "rgb(211, 211, 211)";
			 
			array2d[element.charAt(1)][element.charAt(2)]=0;
		}
		else  
		{
			 
			document.getElementById(element).style.backgroundColor = "rgb(128, 128, 128)";
			array2d[element.charAt(1)][element.charAt(2)]=1;
		}
		
	}
}


var zerowanie = document.getElementById('zerowanie');

zerowanie.addEventListener("click", function() { clickZerowanie(); });

function clickZerowanie()
{
	
	$('.pixel').css("backgroundColor","rgb(211, 211, 211)")
	
	for(i=0;i<9;i++)
	{
		for(j=0;j<9;j++)
			array2d[i][j]=0;
	}
}

var dylatacja = document.getElementById('dylatacja');

dylatacja.addEventListener("click", function() { clickdylatacja(); });

function changeColor(i,j)
{
	firstValue=i; secondValue=j;
	element="p"+firstValue+secondValue;
	if (document.getElementById(element).style.backgroundColor === "rgb(128, 128, 128)") 
		document.getElementById(element).style.backgroundColor = "rgb(211, 211, 211)";
	else	
		document.getElementById(element).style.backgroundColor = "rgb(128, 128, 128)";
}
function clickdylatacja()
{
	
	var pixelsToChange=[];
			
	for(i=0;i<9;i++)
	{
		for(j=0;j<9;j++)
		{
			if (j > 0 && i > 0 && i < 8 && j < 8)
			{
				if (array2d[i][j] == 0 && (array2d[i - 1][j] == 1 || array2d[i][j - 1] == 1 || array2d[i + 1][j] == 1 || array2d[i][j + 1] == 1))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
	
				}
			}
			else if (i == 0 && j == 0) //prawy gorny rog
			{
				if (array2d[i][j] == 0 && (array2d[i + 1][j] == 1 || array2d[i][j + 1] == 1))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i == 0 && j == 8) //lewy gorny rog
			{
				if (array2d == 0 && (array2d[i + 1][j] == 1 || array2d[i][j - 1] == 1))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i == 8 && j == 8) //prawy dolny rog
			{
				if (array2d == 0 && (array2d[i - 1][j] == 1 || array2d[i][j - 1] == 1))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i == 0 && j == 8) //lewy dolny rog
			{
				if (array2d[i][j] == 0 && (array2d[i + 1][j] == 1 || array2d[i][j - 1] == 1))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i != 0 && i != 8 && j == 0) //prawy bok (bez rogow)
			{
				if (array2d[i][j] == 0 && (array2d[i + 1][j] == 1 || array2d[i][j + 1] == 1 || array2d[i - 1][j] == 1))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i == 0 && j != 8 && j != 0) // gorny bok (bez rogow)
			{
				if (array2d[i][j] == 0 && (array2d[i][j - 1] == 1 || array2d[i][j + 1] == 1 || array2d[i + 1][j] == 1))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i != 0 && i != 8 && j == 8) //lewy bok (bez rogow)
			{
				if (array2d[i][j] == 0 && (array2d[i][j - 1] == 1 || array2d[i + 1][j] == 1 || array2d[i - 1][j] == 1))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i == 8 && j != 0 && j != 8) //dolny bok(bez rogow)
			{
				if (array2d[i][j] == 0 && (array2d[i][j - 1] == 1 || array2d[i][j + 1] == 1 || array2d[i - 1][j] == 1))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
		}
		
		
	}
		
	var m=0,n=0;
		while(pixelsToChange.length>0)
		{
			
			m=pixelsToChange[pixelsToChange.length-1];
			pixelsToChange.pop();
			n=pixelsToChange[pixelsToChange.length-1];
			pixelsToChange.pop();
			array2d[n][m]=1;
		}	
		
}

var erozja = document.getElementById('erozja');

erozja.addEventListener("click", function() { clickErozja(); });

function clickErozja()
{
	var pixelsToChange=[];
			
	for(i=0;i<9;i++)
	{
		for(j=0;j<9;j++)
		{
			if (j > 0 && i > 0 && i < 8 && j < 8) // elementy 	niebrzegowe
				{
					if (array2d[i][j] == 1 && (array2d[i - 1][j] == 0 || array2d[i][j - 1] == 0 || array2d[i + 1][j] == 0 || array2d[i][j + 1] == 0))
					{
						changeColor(i,j);
						pixelsToChange.push(i);
						pixelsToChange.push(j);
					}
			}
			else if (i == 0 && j == 0) //prawy gorny rog
			{
				if (array2d[i][j] == 1 && (array2d[i + 1][j] == 0 || array2d[i][j + 1] == 0))
				{
						changeColor(i,j);
						pixelsToChange.push(i);
						pixelsToChange.push(j);
				}
			}
			else if (i == 0 && j == 8) //lewy gorny rog
			{
				if (array2d[i][j] == 1 && (array2d[i + 1][j] == 0 || array2d[i][j - 1] == 0))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i == 8 && j == 8) //prawy dolny rog
			{
				if (array2d[i][j] == 1 && (array2d[i - 1][j] == 0 || array2d[i][j - 1] == 0))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i == 0 && j == 8) //lewy dolny rog
			{
				if (array2d[i][j] == 1 && (array2d[i + 1][j] == 0 || array2d[i][j - 1] == 0))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i != 0 && i != 8 && j == 0) //prawy bok (bez rogow)
			{
				if (array2d[i][j] == 1 && (array2d[i + 1][j] == 0 || array2d[i][j + 1] == 1 || array2d[i - 1][j] == 0))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i == 0 && j != 8 && j != 0) // gorny bok (bez rogow)
			{
				if (array2d[i][j] == 1 && (array2d[i][j - 1] == 0 ||array2d[i][j + 1] == 0 || array2d[i + 1][j] == 0))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i != 0 && i != 8 && j == 8) //lewy bok (bez rogow)
			{
				if (array2d[i][j] == 1 && (array2d[i][j - 1] == 0 || array2d[i + 1][j] == 0 || array2d[i - 1][j] == 0))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
			else if (i == 8 && j != 0 && j != 8) //dolny bok(bez rogow)
			{
				if (array2d[i][j] == 1 && (array2d[i][j - 1] == 0 || array2d[i][j + 1] == 0 || array2d[i - 1][j] == 0))
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
				}
			}
		
		}
	}
	var m=0,n=0;
	while(pixelsToChange.length>0)
	{
			
		m=pixelsToChange[pixelsToChange.length-1];
		pixelsToChange.pop();
		n=pixelsToChange[pixelsToChange.length-1];
		pixelsToChange.pop();
		array2d[n][m]=0;
	}	
}
$( "#usrednianie" ).click(function(){

	 
	var pixelsToChange=[];

	for ( i = 0; i < 9; i++)
	{
		for (j = 0; j < 9; j++)
		{
			if (j > 0 && i > 0 && i < 8 && j < 8) // elementy niebrzegowe
			{
				var ilSasiadow = 0, kolor = 0;
				if (array2d[i][j] == 0) //zliczamy ilosc sasiadow innego koloru jezeli pixel jest bialy
				{
					if (array2d[i - 1][j] == 1)
						ilSasiadow += 1;
					if (array2d[i + 1][j] == 1)
						ilSasiadow += 1;
					if (array2d[i][j - 1] == 1)
						ilSasiadow += 1;
					if (array2d[i][j + 1] == 1)
						ilSasiadow += 1;

					kolor = 1;
				}
				else //zliczamy ilosc sasiadow innego koloru jezeli pixel jest czarny
				{
					if (array2d[i - 1][j] == 0)
						ilSasiadow += 1;
					if (array2d[i + 1][j] == 0)
						ilSasiadow += 1;
					if (array2d[i][j - 1] == 0)
						ilSasiadow += 1;
					if (array2d[i][j + 1] == 0)
						ilSasiadow += 1;

					kolor = 0;
				}

				if (ilSasiadow > 2) //jezeli ma wiecej niz 2 sasiadow innego koloru to zapisujemy go do zmiany
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
					pixelsToChange.push(kolor);
				}
			}

			//tu nie sprawdzamy rogow poniewaz maja tylko dwoch sasiadow

			else if (i != 0 && i != 8 && j == 0) //prawy bok (bez rogow)
			{
				var ilSasiadow = 0, kolor = 0;
				if (array2d[i][j] == 0) //zliczamy ilosc sasiadow innego koloru jezeli pixel jest bialy
				{
					if (array2d[i + 1][j] == 1)
						ilSasiadow += 1;
					if (array2d[i - 1][j] == 1)
						ilSasiadow += 1;
					if (array2d[i][j - 1] == 1)
						ilSasiadow += 1;

					kolor = 1;
				}
				else //zliczamy ilosc sasiadow innego koloru jezeli pixel jest czarny
				{
					if (array2d[i + 1][j] == 0)
						ilSasiadow += 1;
					if (array2d[i][j - 1] == 0)
						ilSasiadow += 1;
					if (array2d[i - 1][j] == 0)
						ilSasiadow += 1;

					kolor = 0;
				}

				if (ilSasiadow > 2) //jezeli ma wiecej niz 2 sasiadow innego koloru to zapisujemy go do zmiany
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
					pixelsToChange.push(kolor);
				}
			}

			else if (i == 0 && j !=8 && j != 0) // gorny bok (bez rogow)
			{
				var ilSasiadow = 0, kolor = 0;
				if (array2d[i][j] == 0) //zliczamy ilosc sasiadow innego koloru jezeli pixel jest bialy
				{
					if (array2d[i + 1][j] == 1)
						ilSasiadow += 1;
					if (array2d[i][j - 1] == 1)
						ilSasiadow += 1;
					if (array2d[i][j + 1] == 1)
						ilSasiadow += 1;

					kolor = 1;
				}
				else //zliczamy ilosc sasiadow innego koloru jezeli pixel jest czarny
				{
					if (array2d[i + 1][j] == 0)
						ilSasiadow += 1;
					if (array2d[i][j - 1] == 0)
						ilSasiadow += 1;
					if (array2d[i][j + 1] == 0)
						ilSasiadow += 1;

					kolor = 0;
				}

				if (ilSasiadow > 2) //jezeli ma wiecej niz 2 sasiadow innego koloru to zapisujemy go do zmiany
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
					pixelsToChange.push(kolor);
				}
			}

			else if (i != 0 && i !=8 && j == 8) //lewy bok (bez rogow)
			{
				var ilSasiadow = 0, kolor = 0;
				if (array2d[i][j] == 0) //zliczamy ilosc sasiadow innego koloru jezeli pixel jest bialy
				{
					if (array2d[i + 1][j] == 1)
						ilSasiadow += 1;
					if (array2d[i - 1][j] == 1)
						ilSasiadow += 1;
					if (array2d[i][j + 1] == 1)
						ilSasiadow += 1;

					kolor = 1;
				}
				else //zliczamy ilosc sasiadow innego koloru jezeli pixel jest czarny
				{
					if (array2d[i + 1][j] == 0)
						ilSasiadow += 1;
					if (array2d[i - 1][j] == 0)
						ilSasiadow += 1;
					if (array2d[i][j + 1] == 0)
						ilSasiadow += 1;

					kolor = 0;
				}

				if (ilSasiadow > 2) //jezeli ma wiecej niz 2 sasiadow innego koloru to zapisujemy go do zmiany
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
					pixelsToChange.push(kolor);
				}
			}

			else if (i == 8 && j != 0 && j != 8) //dolny bok(bez rogow)
			{
				var ilSasiadow = 0, kolor = 0;
				if (array2d[i][j] == 0) //zliczamy ilosc sasiadow innego koloru jezeli pixel jest bialy
				{
					if (array2d[i][j - 1] == 1)
						ilSasiadow += 1;
					if (array2d[i - 1][j] == 1)
						ilSasiadow += 1;
					if (array2d[i][j + 1] == 1)
						ilSasiadow += 1;

					kolor = 1;
				}
				else //zliczamy ilosc sasiadow innego koloru jezeli pixel jest czarny
				{
					if (array2d[i][j - 1] == 0)
						ilSasiadow += 1;
					if (array2d[i - 1][j] == 0)
						ilSasiadow += 1;
					if (array2d[i][j + 1] == 0)
						ilSasiadow += 1;

					kolor = 0;
				}

				if (ilSasiadow > 2) //jezeli ma wiecej niz 2 sasiadow innego koloru to zapisujemy go do zmiany
				{
					changeColor(i,j);
					pixelsToChange.push(i);
					pixelsToChange.push(j);
					pixelsToChange.push(kolor);
				}
			}


		}


	}
	var m = 0, n = 0, kolor = 0;
	while (pixelsToChange.length>0)
	{
		kolor = pixelsToChange[pixelsToChange.length-1];
		pixelsToChange.pop();
		m = pixelsToChange[pixelsToChange.length-1];
		pixelsToChange.pop();
		n = pixelsToChange[pixelsToChange.length-1];
		pixelsToChange.pop();
		array2d[n][m] = kolor;
		
	}
	for(i=0;i<9;i++)
	{
		for(j=0;j<9;j++)
		{
		console.log(array2d[i][j])
		}
	}
	//var m=0,n=0,kolor=0;
	//while(pixelsToChange.length>0)
	//{
	//		
	//	m=pixelsToChange[pixelsToChange.length-1];
	//	pixelsToChange.pop();
	//	n=pixelsToChange[pixelsToChange.length-1];
	//	pixelsToChange.pop();
	//	array2d[n][m]=0;
	//}	

})