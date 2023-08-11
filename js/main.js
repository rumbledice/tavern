
(async () => {
	const headerResponse = await fetch('/header.html');
    const headerText = await headerResponse.text();
	const headerPlaceholser = document.querySelector('.headerPlaceholder')
	if (headerPlaceholser) headerPlaceholser.innerHTML = headerText;
	addHeaderHandlers()
	
    const footerResponse = await fetch('/footer.html');
    const footerText = await footerResponse.text();
	const footerPlaceholder = document.querySelector('.footerPlaceholder')
	if (footerPlaceholder) footerPlaceholder.innerHTML = footerText;

})();

function addHeaderHandlers() {
	let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector('.menu');
	
	menuBtn.addEventListener('click', function(){
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	});
}