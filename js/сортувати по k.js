const filterSpellk = document.querySelectorAll('.spell');

document.querySelector('.spellingk').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	// видаляємо попередні виділення
	document.querySelectorAll('.spellingk li').forEach( el => {
		el.classList.remove('active');
	});

	// виділяємо активний елемент
	event.target.classList.add('active');

	let filterClassk = event.target.dataset['k'];
	
	filterSpellk.forEach( elem =>{
		elem.classList.remove('hidek');
		if (!elem.classList.contains(filterClassk) && filterClassk !== 'All') {
			elem.classList.add('hidek');
		}
	});
});
