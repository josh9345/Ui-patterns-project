let dropDown = document.querySelectorAll('.tab');
let text = document.createElement('p')
let infoBox = document.querySelectorAll('.panel')
let baseUrl = 'https://rickandmortyapi.com/api/character/'
let image = document.querySelectorAll('.image')
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
for(i=0; i<dropDown.length; i++){
	fetch(baseUrl)
	.then(res => {
		infoBox[i].image[i].setAttribute('src', baseUrl + i)})

}
let test = baseUrl + '1';
console.log(test)