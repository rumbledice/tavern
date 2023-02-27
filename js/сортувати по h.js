const filterSpellh = document.querySelectorAll('.spell');

document.querySelector('.spellingh').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	let filterClassh = event.target.dataset['h'];
	
	filterSpellh.forEach( elem =>{
		elem.classList.remove('hideh');
		if (!elem.classList.contains(filterClassh) && filterClassh !== 'All') {
			elem.classList.add('hideh');
		}
	});
});