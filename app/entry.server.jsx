import { RemixServer } from "remix";
import { CacheProvider } from "@emotion/react";
import { renderToString } from "react-dom/server";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "~/utils/create-emotion-cache";
import ServerStyleContext from "~/providers/style.server";

const emotionCache = createEmotionCache();

/**
 * @param {Request} request
 * @param {number} responseStatusCode
 * @param {Headers} responseHeaders
 * @param {import('remix').EntryContext} remixContext
 */
export default function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
	const { extractCriticalToChunks } = createEmotionServer(emotionCache);

	const html = renderToString(
		<ServerStyleContext.Provider value={null}>
			<CacheProvider value={emotionCache}>
				<RemixServer context={remixContext} url={request.url} />
			</CacheProvider>
		</ServerStyleContext.Provider>,
	);

	const chunks = extractCriticalToChunks(html);

	const markup = renderToString(
		<ServerStyleContext.Provider value={chunks.styles}>
			<CacheProvider value={emotionCache}>
				<RemixServer context={remixContext} url={request.url} />
			</CacheProvider>
		</ServerStyleContext.Provider>,
	);

	responseHeaders.set("Content-Type", "text/html");

	return new Response(`<!DOCTYPE html>${markup}`, {
		status: responseStatusCode,
		headers: responseHeaders,
	});
}
