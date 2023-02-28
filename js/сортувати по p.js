const filterSpellp = document.querySelectorAll('.spell');

document.querySelector('.spellingp').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	// видаляємо попередні виділення
	document.querySelectorAll('.spellingp li').forEach( el => {
		el.classList.remove('active');
	});

	// виділяємо активний елемент
	event.target.classList.add('active');

	let filterClassp = event.target.dataset['p'];
	
	filterSpellp.forEach( elem =>{
		elem.classList.remove('hidep');
		if (!elem.classList.contains(filterClassp) && filterClassp !== 'All') {
			elem.classList.add('hidep');
		}
	});
});
