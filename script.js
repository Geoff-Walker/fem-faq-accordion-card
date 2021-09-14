///////////////////////Define Global Variables////////////////////////////////

const clickables = document.querySelectorAll('.sub-group');
const atbox = document.querySelector('.img-box');
const heading = document.querySelectorAll('.subheading');
const para = document.querySelectorAll('.para');
let selectedDiv = '';

/////////////////Select Elements that need to be manipulated////////////////////
clickables.forEach((button) => {
	button.addEventListener('click', () => {
		let selectionValue = button.dataset.selection;
		selectedDiv = `.subheading${selectionValue}`;

		////////select div and process active or inactive/////////////
		if (document.querySelector([ selectedDiv ]).classList.contains('active-subheading')) {
			console.log('hide- me');
			hide(selectionValue);
		} else {
			unhide(selectionValue);
		}
	});
});

heading.forEach((button) => {
	button.addEventListener('mouseover', () => {
		console.log('moving moving moving');
		document.querySelector('.img-box').style.left = '-130px';
	});
});

heading.forEach((button) => {
	button.addEventListener('mouseout', () => {
		console.log('return retun reurnr');
		document.querySelector('.img-box').style.left = '-92px';
	});
});

////////////////////////////* Card Functions*//////////////////////////////////////

//////////////Hide Selected elements if selection is active/////////////////////////
function hide(selectionValue) {
	document.querySelector(`.para${selectionValue}`).classList.add('hidden');
	document.querySelector(`.subheading${selectionValue}`).classList.remove('active-subheading');
	document.querySelector(`.arrow${selectionValue}`).classList.remove('active-arrow');
}

///////////////Unhide Selected elements if selection is not active and reset all elements to inactive ///////////////////////////
function unhide(selectionValue) {
	//////////////////Reset all elements to inactive before selecting new one//////////////////////////////
	for (let i = 1; i <= 5; i++) {
		if (document.querySelector(`.subheading${i}`).classList.contains('active-subheading')) {
			document.querySelector(`.subheading${i}`).classList.remove('active-subheading');
			document.querySelector(`.para${i}`).classList.add('hidden');
			document.querySelector(`.arrow${i}`).classList.remove('active-arrow');
		}
	}
	/////////////////Makes New selection active //////////////////////////////////////////////
	document.querySelector(`.para${selectionValue}`).classList.remove('hidden');
	document.querySelector(`.subheading${selectionValue}`).classList.add('active-subheading');
	document.querySelector(`.arrow${selectionValue}`).classList.add('active-arrow');
}

///////////////////At hover box function/////////////////////////////////
