console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The Form has been Submitted.');
}



//I DID MOUSEOVER EVENT IN MY HTML

function setNewImage() {
	alert('You have great taste in webpages')
}

let test = document.getElementById("test");


  

let form = document.querySelector('form#contact');

//let test = document.getElementById("test");


form.addEventListener('submit', handleSubmit);

