const filterSpellt = document.querySelectorAll('.spell');

document.querySelector('.spellingt').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	// видаляємо попередні виділення
	document.querySelectorAll('.spellingt li').forEach( el => {
		el.classList.remove('active');
	});

	// виділяємо активний елемент
	event.target.classList.add('active');

	let filterClasst = event.target.dataset['t'];
	
	filterSpellt.forEach( elem =>{
		elem.classList.remove('hidet');
		if (!elem.classList.contains(filterClasst) && filterClasst !== 'All') {
			elem.classList.add('hidet');
		}
	});
});
