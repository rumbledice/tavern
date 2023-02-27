const filterSpellp = document.querySelectorAll('.spell');

document.querySelector('.spellingp').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	let filterClassp = event.target.dataset['p'];
	
	filterSpellp.forEach( elem =>{
		elem.classList.remove('hidep');
		if (!elem.classList.contains(filterClassp) && filterClassp !== 'All') {
			elem.classList.add('hidep');
		}
	});
});