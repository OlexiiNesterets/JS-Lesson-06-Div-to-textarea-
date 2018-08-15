'use strict';

var div = document.querySelector('.field');
var textarea = document.createElement('textarea');
textarea.classList.add('field', 'text-area-field');


/* Flag that shows current state of our element in DOM ('true' when <div>
and 'false' when <textarea> ) */
var isDiv = true;

var escKey = false;
var eKey = false;
var sKey = false;

function makeFalse() {
	escKey = false;
	eKey = false;
	sKey = false;
}

/* Change <div> to <textarea> and vice versa */
function replace(itemToReplace, itemToInsert) {
	itemToReplace.parentNode.replaceChild(itemToInsert, itemToReplace);
	isDiv = !isDiv;
}

document.addEventListener('keydown', function(event) {

	if (event.keyCode === 69) {
		eKey = true;
	}
	if (event.keyCode === 27) {
		escKey = true;
	}
	if (event.keyCode === 83) {
		sKey = true;
	}

	if (event.ctrlKey && eKey && isDiv) {

		replace(div, textarea);
		makeFalse();
		event.preventDefault();

	} else if (event.ctrlKey && sKey && !isDiv) {

		replace(textarea, div);
		div.textContent = textarea.value;
		makeFalse();
		event.preventDefault();

	} else if (escKey && !isDiv) {

		replace(textarea, div);
		textarea.value = div.textContent;

	}

});

document.addEventListener('keyup', makeFalse);

