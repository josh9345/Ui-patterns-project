let dropDown = document.querySelectorAll('.tab');
// let text = document.createElement('p')
let charInfo = document.querySelectorAll('p')
let infoBox = document.querySelectorAll('.panel')
let baseUrl = 'https://rickandmortyapi.com/api/character/'
let image = document.querySelectorAll('.image')


for(let i=0; i<dropDown.length; i++){
	dropDown[i].addEventListener('hoover', function(){
		this.classList.toggle('active');
		
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
// fetch(baseUrl)
// .then(res =>{
// 	return res.json();
// })
// .then(res =>{

// 	for(i=0; i<dropDown.length; i++){
// 		let test = baseUrl + (i+1);
// 		console.log(test)
// 		image[i].setAttribute('src', test.image)
// 		console.log(test.image)
// 	}
// 	});	
		
// 	}
// }
for(let i=0; i<=dropDown.length; i++){
	fetch(baseUrl +i+1)
	.then(res =>{
		return res.json();
	})
	.then(res =>{
		image[i].setAttribute('src', res.image)
		let text = document.createElement('p')
		infoBox[i].appendChild(text).innerText = 'Name: '+res.name
	
		console.log(res)
	})
}

console.log(image)
