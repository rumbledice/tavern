const filterSpellf = document.querySelectorAll('.spell');

document.querySelector('.spellingf').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	let filterClassf = event.target.dataset['f'];
	
	filterSpellf.forEach( elem =>{
		elem.classList.remove('hidef');
		if (!elem.classList.contains(filterClassf) && filterClassf !== 'All') {
			elem.classList.add('hidef');
		}
	});
});