'use strict';

(function editableDiv(){

	var div = document.querySelector('.field');
	var textarea = document.createElement('textarea');
	textarea.classList.add('field', 'text-area-field');
	
	/* Flag that shows current state of our element in DOM ('true' when <div>
	and 'false' when <textarea> ) */
	var isDiv = true;
	
	/* Change <div> to <textarea> and vice versa */
	function replace(itemToReplace, itemToInsert) {
		itemToReplace.parentNode.replaceChild(itemToInsert, itemToReplace);
		isDiv = !isDiv;
	}
	
	document.addEventListener('keydown', function(event) {
	
		if (event.ctrlKey && event.keyCode === 69 && isDiv) {
	
			replace(div, textarea);
			event.preventDefault();
	
		} else if (event.ctrlKey && event.keyCode === 83 && !isDiv) {
	
			replace(textarea, div);
			div.textContent = textarea.value;
			event.preventDefault();
	
		} else if (event.keyCode === 27 && !isDiv) {
	
			replace(textarea, div);
			textarea.value = div.textContent;
	
		}
	});
}());

