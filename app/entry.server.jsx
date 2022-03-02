import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";

/**
 * @param {Request} request
 * @param {number} responseStatusCode
 * @param {Headers} responseHeaders
 * @param {import('remix').EntryContext} remixContext
 */
export default function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
	const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);

	responseHeaders.set("Content-Type", "text/html");

	return new Response(`<!DOCTYPE html>${markup}`, {
		status: responseStatusCode,
		headers: responseHeaders,
	});
}
