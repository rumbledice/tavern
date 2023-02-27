const filterSpelly = document.querySelectorAll('.spell');

document.querySelector('.spellingy').addEventListener('click', event =>{
	if (event.target.tagName !== 'LI') return false;
	
	let filterClassy = event.target.dataset['y'];
	
	filterSpelly.forEach( elem =>{
		elem.classList.remove('hidey');
		if (!elem.classList.contains(filterClassy) && filterClassy !== 'All') {
			elem.classList.add('hidey');
		}
	});
});