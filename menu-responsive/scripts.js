window.onload = () => {

	const headerBottom = document.querySelector('.header-bottom');
	const menu = document.querySelector('.menu');
	const btnMobile = document.querySelector('.menu-mobile');
	const itemMenu = document.querySelectorAll('.menu > li');
	const itemBtn = document.querySelectorAll('.menu-mobile div');


	let hMenu = menu.clientHeight;
	let hItemMenu = 0;

	for ( let i = 0; i < itemMenu.length; i ++ ) {
		hItemMenu = hItemMenu + itemMenu[i].clientHeight;
	}
	console.log(hItemMenu);


	// Click al boton menu mobile
	let status = 0;
	
	btnMobile.addEventListener( 'click', () =>  {
		if ( status == 0 ) {
			menu.style.height = `${ hItemMenu }px`;
			headerBottom.style.marginBottom = `${ hItemMenu + 20 }px`;
			unColocateMobile();
			status ++;
		} else if ( status == 1 ) {
			menu.style.height = '0px';
			headerBottom.style.marginBottom = `0px`;
			colocateMobile();
			status --;
		}
	});

	
	//---function uncolocate menu mobile
	let unColocateMobile = () => {
		itemBtn[0].style.transform = 'rotate(45deg) translate(11px, 10px)';
		itemBtn[1].style.opacity = '0';
		itemBtn[2].style.transform = 'rotate(-45deg) translate(11px, -10px)';
	}

	let colocateMobile = () => {
		itemBtn[0].style.transform = 'none';
		itemBtn[1].style.opacity = '1';
		itemBtn[2].style.transform = 'none';
	}


}
