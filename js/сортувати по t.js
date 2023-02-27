const filterSpellt = document.querySelectorAll('.spell');

document.querySelector('.spellingt').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	let filterClasst = event.target.dataset['t'];
	
	filterSpellt.forEach( elem =>{
		elem.classList.remove('hidet');
		if (!elem.classList.contains(filterClasst) && filterClasst !== 'All') {
			elem.classList.add('hidet');
		}
	});
});