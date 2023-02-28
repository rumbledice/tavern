const filterSpellq = document.querySelectorAll('.spell');

document.querySelector('.spellingq').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	// видаляємо попередні виділення
	document.querySelectorAll('.spellingq li').forEach( el => {
		el.classList.remove('active');
	});

	// виділяємо активний елемент
	event.target.classList.add('active');

	let filterClassq = event.target.dataset['q'];
	
	filterSpellq.forEach( elem =>{
		elem.classList.remove('hideq');
		if (!elem.classList.contains(filterClassq) && filterClassq !== 'All') {
			elem.classList.add('hideq');
		}
	});
});
