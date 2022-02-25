console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted');
}
function duck(event) {
	event.preventDefault()
	alert('ur cute;)')
}


let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);
let duckImg = document.querySelector('#duck')
duckImg.addEventListener('mouseover', duck)