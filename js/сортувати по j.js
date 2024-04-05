const filterSpellj = document.querySelectorAll('.spell');

document.querySelector('.spellingj').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	// видаляємо попередні виділення
	document.querySelectorAll('.spellingj li').forEach( el => {
		el.classList.remove('active');
	});

	// виділяємо активний елемент
	event.target.classList.add('active');

	let filterClassj = event.target.dataset['j'];
	
	filterSpellj.forEach( elem =>{
		elem.classList.remove('hidej');
		if (!elem.classList.contains(filterClassj) && filterClassj !== 'All') {
			elem.classList.add('hidej');
		}
	});
});
