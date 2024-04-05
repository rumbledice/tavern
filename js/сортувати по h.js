const filterSpellh = document.querySelectorAll('.spell');

document.querySelector('.spellingh').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	// видаляємо попередні виділення
	document.querySelectorAll('.spellingh li').forEach( el => {
		el.classList.remove('active');
	});

	// виділяємо активний елемент
	event.target.classList.add('active');

	let filterClassh = event.target.dataset['h'];
	
	filterSpellh.forEach( elem =>{
		elem.classList.remove('hideh');
		if (!elem.classList.contains(filterClassh) && filterClassh !== 'All') {
			elem.classList.add('hideh');
		}
	});
});
