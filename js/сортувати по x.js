const filterSpellx = document.querySelectorAll('.spell');

document.querySelector('.spellingx').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	// видаляємо попередні виділення
	document.querySelectorAll('.spellingx li').forEach( el => {
		el.classList.remove('active');
	});

	// виділяємо активний елемент
	event.target.classList.add('active');

	let filterClassx = event.target.dataset['x'];
	
	filterSpellx.forEach( elem =>{
		elem.classList.remove('hidex');
		if (!elem.classList.contains(filterClassx) && filterClassx !== 'All') {
			elem.classList.add('hidex');
		}
	});
});
