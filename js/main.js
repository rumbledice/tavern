
(async () => {
	const headerResponse = await fetch('/header.html');
    const headerText = await headerResponse.text();
	const headerPlaceholser = document.querySelector('.headerPlaceholder')
	if (headerPlaceholser) headerPlaceholser.innerHTML = headerText;
     else {
        const alternativeHeaderResponse = await fetch('/header1.html');
        const alternativeHeaderText = await alternativeHeaderResponse.text();
        const alternativeHeaderPlaceholder = document.querySelector('.headerPlaceholder1');
        if (alternativeHeaderPlaceholder) {
            alternativeHeaderPlaceholder.innerHTML = alternativeHeaderText;
        }
    }
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