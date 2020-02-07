let dropDown = document.querySelectorAll('.tab');
let text = document.createElement('p')
let infoBox = document.querySelectorAll('.panel')
for(let i=0; i<dropDown.length; i++){	
		infoBox[i].appendChild(text.cloneNode()).innerText = 'hdgsghfg fiuehwiflu oihdfwoh hdslajhs fjkdsafjslah';
}
for(let i=0; i<dropDown.length; i++){
	dropDown[i].addEventListener('hoover', function(){
		this.classList.toggle('active');
		let panel = document.querySelectorAll('p')
	})
}
for(let i=0; i<dropDown.length; i++){
	dropDown[i].addEventListener('click', function(){
			if(infoBox[i].style.display === 'block'){
			infoBox[i].style.display = 'none';
		}
		else{
			infoBox[i].style.display = 'block'
		}
	})
}
console.log(dropDown)