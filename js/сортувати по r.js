const filterSpellr = document.querySelectorAll('.spell');

document.querySelector('.spellingr').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	// видаляємо попередні виділення
	document.querySelectorAll('.spellingr li').forEach( el => {
		el.classList.remove('active');
	});

	// виділяємо активний елемент
	event.target.classList.add('active');

	let filterClassr = event.target.dataset['r'];
	
	filterSpellr.forEach( elem =>{
		elem.classList.remove('hider');
		if (!elem.classList.contains(filterClassr) && filterClassr !== 'All') {
			elem.classList.add('hider');
		}
	});
});
