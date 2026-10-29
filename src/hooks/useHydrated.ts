import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

/**
 * False during prerendering and hydration, true afterwards. Use it to read
 * browser-only state (such as the query string) without making the first
 * client render differ from the prerendered HTML.
 */
export function useHydrated(): boolean {
	return useSyncExternalStore(
		subscribe,
		() => true,
		() => false
	);
}
