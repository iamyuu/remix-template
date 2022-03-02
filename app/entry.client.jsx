import * as React from "react";
import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { CacheProvider } from "@emotion/react";
import ClientStyleContext from "~/providers/style.client";
import createEmotionCache from "~/utils/create-emotion-cache";

/**
 * Cache provider on the client-side.
 *
 * @param {Object} props
 * @param {import('react').ReactNode} props.children
 */
function ClientCacheProvider(props) {
	const [cache, setCache] = React.useState(createEmotionCache());

	const resetCache = () => setCache(createEmotionCache());

	const value = React.useMemo(() => ({ resetCache }), []);

	return (
		<ClientStyleContext.Provider value={value}>
			<CacheProvider value={cache}>{props.children}</CacheProvider>
		</ClientStyleContext.Provider>
	);
}

hydrate(
	<ClientCacheProvider>
		<RemixBrowser />
	</ClientCacheProvider>,
	document,
);
