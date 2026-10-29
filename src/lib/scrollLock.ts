/**
 * Ref-counted body scroll lock. Overlays can stack (gallery modal plus
 * lightbox, mobile menu): the body unlocks only when the last holder
 * releases, whatever the release order.
 *
 * Toggles a class rather than an inline style, so the CSP can keep
 * style-src free of 'unsafe-inline'.
 */
let locks = 0;

export function lockScroll(): () => void {
	if (typeof document === 'undefined') return () => {};
	locks++;
	document.documentElement.classList.add('scroll-locked');
	let released = false;
	return () => {
		if (released) return;
		released = true;
		locks = Math.max(0, locks - 1);
		if (locks === 0) document.documentElement.classList.remove('scroll-locked');
	};
}
