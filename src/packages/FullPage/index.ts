const initFullPage = (fn: any) => {
	let lastKnownScrollPosition = 0;
	let ticking = false;
	window.addEventListener('scroll', function () {
		const previousKnownScrollPosition = lastKnownScrollPosition;
		lastKnownScrollPosition = window.scrollY;
		if (!ticking) {
			window.requestAnimationFrame(function () {
				fn(lastKnownScrollPosition, previousKnownScrollPosition);
				ticking = false;
			});
			ticking = true;
		}
	});
};

export default initFullPage;
