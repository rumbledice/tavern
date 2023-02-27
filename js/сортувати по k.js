const filterSpellk = document.querySelectorAll('.spell');

document.querySelector('.spellingk').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	let filterClassk = event.target.dataset['k'];
	
	filterSpellk.forEach( elem =>{
		elem.classList.remove('hidek');
		if (!elem.classList.contains(filterClassk) && filterClassk !== 'All') {
			elem.classList.add('hidek');
		}
	});
});