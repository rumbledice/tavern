const filterSpellm = document.querySelectorAll('.spell');

document.querySelector('.spellingm').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	let filterClassm = event.target.dataset['m'];
	
	filterSpellm.forEach( elem =>{
		elem.classList.remove('hidem');
		if (!elem.classList.contains(filterClassm) && filterClassm !== 'All') {
			elem.classList.add('hidem');
		}
	});
});