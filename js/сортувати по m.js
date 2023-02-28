const filterSpellm = document.querySelectorAll('.spell');

document.querySelector('.spellingm').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	// видаляємо попередні виділення
	document.querySelectorAll('.spellingm li').forEach( el => {
		el.classList.remove('active');
	});

	// виділяємо активний елемент
	event.target.classList.add('active');

	let filterClassm = event.target.dataset['m'];
	
	filterSpellm.forEach( elem =>{
		elem.classList.remove('hidem');
		if (!elem.classList.contains(filterClassm) && filterClassm !== 'All') {
			elem.classList.add('hidem');
		}
	});
});
