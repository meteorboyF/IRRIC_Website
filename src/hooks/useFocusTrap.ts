import { useEffect, type RefObject } from 'react';
import { lockScroll } from '../lib/scrollLock';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * For modal dialogs: locks page scroll, moves focus into the dialog, keeps
 * Tab and Shift+Tab inside it, closes on Escape, and returns focus to
 * whatever opened it. Only the top-most dialog reacts to Escape, because
 * each trap stops the event once it has handled it.
 */
export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean, onEscape: () => void, initialFocus?: RefObject<HTMLElement | null>) {
	useEffect(() => {
		if (!active) return;
		const node = ref.current;
		if (!node) return;
		const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		const unlock = lockScroll();
		(initialFocus?.current ?? node.querySelector<HTMLElement>(FOCUSABLE) ?? node).focus();

		function onKeyDown(event: KeyboardEvent) {
			if (!node) return;
			if (event.key === 'Escape') {
				event.stopPropagation();
				onEscape();
				return;
			}
			if (event.key !== 'Tab') return;
			const items = [...node.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => el.offsetParent !== null || el === document.activeElement);
			if (items.length === 0) {
				event.preventDefault();
				return;
			}
			const first = items[0];
			const last = items[items.length - 1];
			if (!first || !last) return;
			if (event.shiftKey && (document.activeElement === first || !node.contains(document.activeElement))) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && (document.activeElement === last || !node.contains(document.activeElement))) {
				event.preventDefault();
				first.focus();
			}
		}

		node.addEventListener('keydown', onKeyDown);
		return () => {
			node.removeEventListener('keydown', onKeyDown);
			unlock();
			if (opener && document.contains(opener)) opener.focus();
		};
		// onEscape is intentionally read once per open; callers pass a stable closer.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active]);
}
