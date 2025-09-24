// JavaScript Document
k=0
a=100
score=0
v=0
z=0
y=650
b=350

xtime=120000
xstartall=0




function falling(par){
	if (score<10){
		x=Math.floor(Math.random()*25)+1
		k=k+x
		document.getElementById('nasty').style.top=k+"px"
		if (k>600){
			a=Math.floor(Math.random()*1200)+100
			document.getElementById('nasty').style.left=a+"px"		
			k=0
		}
		
		if ((b>k-30)&&(b<k+30)&&(y>a-30)&&(y<a+30)){
			alert("I'm not a sore loser. It's just that I prefer to win and when I don't, I get furious.")
			document.getElementById('score').innerHTML="You Lose."
			score=20
		}
		setTimeout(function(){falling(par);},50)
	}
}

function ChangePos(par){
	if (score<10){
		v=Math.floor(Math.random()*600)+30
		document.getElementById('aquire').style.top=v+"px"

		z=Math.floor(Math.random()*1000)+200
		document.getElementById('aquire').style.left=z+"px"

		random=Math.floor(Math.random()*6000)+5000
		xpres=setTimeout(function(){ChangePos(par);},random)
		
	}
	if (score===10){
		reset();
	}
}



function moveImage(par){
	if (par.keyCode===39){
		y=y+10
		document.getElementById('game').style.left= y+ "px"
	}
	else if (par.keyCode===37){
		y=y-10
		document.getElementById('game').style.left=y+ "px"
	}
	else if (par.keyCode===38){
		b=b-10
		document.getElementById('game').style.top=b+"px"
	}
	else if (par.keyCode===40){
		b=b+10
		document.getElementById('game').style.top=b+ "px"
	}
	if ((z<y+30)&&(z>y-30)&&(b<v+30)&&(b>v-30)){
		alert("When I eat, it is the food that is scared")
		score=score+1
		document.getElementById('score').innerHTML="Score: "+score
		present=document.getElementById('game').innerHTML
		t="<img src='images/eggsandbacon.png' width='40px' height='40px'>"
		document.getElementById('game').innerHTML= present+t
		document.getElementById('aquire').style.left="-2000px"
		document.getElementById('aquire').style.top="-2000px"
		clearTimeout(xpres)
		ChangePos(par);
		idx="b"+score+"e"
		document.getElementById(idx).style.borderColor="gray"
		document.getElementById(idx).style.opacity="0.5"
		if (score===10){
			alert("Congratulations, you whole-assed this game.")
			
		}
		
	}
}




function startall(){
	falling('nasty')
	ChangePos('aquire')
	xstartall=setTimeout(function(){reset();},xtime);
	document.getElementById('start').style.top="-2000px"
}

function reset(){
	clearTimeout(xstartall)
	clearTimeout(xpres)
	b=350
	y=650
	v=0
	z=0
	k=0 
	a=0
	if (score===10){
		alert("Level Complete.")
		xtime=xtime-10000
		score=0
		startall();
	}
	else {
		alert("Level Timed out - Game Over")
		document.getElementById('score').innerHTML="Game Over."
		score=20
	}
	document.getElementById('game').innerHTML="<img src='images/ronswanson.png' width='70px' id='ron' alt='andy'>"
	document.getElementById('b1e').style.borderColor="white"
	document.getElementById('b1e').style.opacity="1"
	document.getElementById('b2e').style.borderColor="white"
	document.getElementById('b2e').style.opacity="1"
	document.getElementById('b3e').style.borderColor="white"
	document.getElementById('b3e').style.opacity="1"
	document.getElementById('b4e').style.borderColor="white"
	document.getElementById('b4e').style.opacity="1"
	document.getElementById('b5e').style.borderColor="white"
	document.getElementById('b5e').style.opacity="1"
	document.getElementById('b6e').style.borderColor="white"
	document.getElementById('b6e').style.opacity="1"
	document.getElementById('b7e').style.borderColor="white"
	document.getElementById('b7e').style.opacity="1"
	document.getElementById('b8e').style.borderColor="white"
	document.getElementById('b8e').style.opacity="1"
	document.getElementById('b9e').style.borderColor="white"
	document.getElementById('b9e').style.opacity="1"
	document.getElementById('b10e').style.borderColor="white"
	document.getElementById('b10e').style.opacity="1"
}

