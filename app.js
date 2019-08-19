var pics = [
"1.jpg",//0
"2.jpg",//1
"3.jpg",//2
"4.jpg",//3
"5.jpg",//4
"6.jpg"//5
];

var btn=document.querySelector("button");
var img=document.querySelector("img");
var x=1;
btn.addEventListener("click", function(){
if(x==6)
{
	x=0;
}
img.src=pics[x];
x=x+1;
});


	
