const filterSpellx = document.querySelectorAll('.spell');

document.querySelector('.spellingx').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	let filterClassx = event.target.dataset['x'];
	
	filterSpellx.forEach( elem =>{
		elem.classList.remove('hidex');
		if (!elem.classList.contains(filterClassx) && filterClassx !== 'All') {
			elem.classList.add('hidex');
		}
	});
});