
(async () => {
	const headerResponse = await fetch('/tavern/header.html');
    const headerText = await headerResponse.text();
	const headerPlaceholser = document.querySelector('.headerPlaceholder')
	if (headerPlaceholser) headerPlaceholser.innerHTML = headerText;
     else {
        const alternativeHeaderResponse = await fetch('/tavern/header1.html');
        const alternativeHeaderText = await alternativeHeaderResponse.text();
        const alternativeHeaderPlaceholder = document.querySelector('.headerPlaceholder1');
        if (alternativeHeaderPlaceholder) {
            alternativeHeaderPlaceholder.innerHTML = alternativeHeaderText;
        }
    }
	addHeaderHandlers()


    const footerResponse = await fetch('/tavern/footer.html');
    const footerText = await footerResponse.text();
	const footerPlaceholder = document.querySelector('.footerPlaceholder')
	if (footerPlaceholder) footerPlaceholder.innerHTML = footerText;
	 else {
    const alternativeFooterResponse = await fetch('/tavern/footer1.html');
    const alternativeFooterText = await alternativeFooterResponse.text();
    const alternativeFooterPlaceholder = document.querySelector('.footerPlaceholder1');
    if (alternativeFooterPlaceholder) {
      alternativeFooterPlaceholder.innerHTML = alternativeFooterText;
    } else {
      const alternativeFooter2Response = await fetch('/tavern/footer2.html');
      const alternativeFooterText2 = await alternativeFooter2Response.text();
      const alternativeFooterPlaceholder2 = document.querySelector('.footerPlaceholder2');
      if (alternativeFooterPlaceholder2) {
        alternativeFooterPlaceholder2.innerHTML = alternativeFooterText2;
      }
    }
  }
})();

function addHeaderHandlers() {
	let menuBtn = document.querySelector('.menu-btn');
	let menu = document.querySelector('.menu');
	
	menuBtn.addEventListener('click', function(){
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	});
}