console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The Form has been Submitted.');
}



let form = document.querySelector('form#contact');

let test = document.getElementById("test");

Image.addEventListener('mouseover', () => {
	alert("You Are Awesome");
})

form.addEventListener('submit', handleSubmit);
