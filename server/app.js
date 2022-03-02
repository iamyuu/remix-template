import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";

const handleRequest = createPagesFunctionHandler({
	build,
	mode: process.env.NODE_ENV,
	getLoadContext: context => context.env,
});

/**
 * @param {import('@cloudflare/workers-types').EventContext} context
 */
export function onRequest(context) {
	return handleRequest(context);
}
