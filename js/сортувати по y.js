const filterSpelly = document.querySelectorAll('.spell');

document.querySelector('.spellingy').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	// видаляємо попередні виділення
	document.querySelectorAll('.spellingy li').forEach( el => {
		el.classList.remove('active');
	});

	// виділяємо активний елемент
	event.target.classList.add('active');

	let filterClasyf = event.target.dataset['y'];
	
	filterSpelly.forEach( elem =>{
		elem.classList.remove('hidey');
		if (!elem.classList.contains(filterClassy) && filterClassy !== 'All') {
			elem.classList.add('hidey');
		}
	});
});
