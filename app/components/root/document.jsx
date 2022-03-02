import * as React from "react";
import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from "remix";
import { withEmotionCache } from "@emotion/react";
import ClientStyleContext from "~/providers/style.client";
import ServerStyleContext from "~/providers/style.server";
import AllProviders from "~/providers";
import { MemoRouteChangeAnnouncement } from "./route-change-announchement";

/**
 * Document component.
 *
 * @param {Object} props
 * @param {string} [props.title]
 * @param {import('react').ReactNode} props.children
 * @param {import('@emotion/cache').EmotionCache} emotionCache
 */
function BaseDocument(props, emotionCache) {
	const serverStyles = React.useContext(ServerStyleContext);
	const clientStyles = React.useContext(ClientStyleContext);

	// https://github.com/mui-org/material-ui/issues/30436#issuecomment-1003339715
	React.useEffect(() => {
		// re-link sheet container
		emotionCache.sheet.container = document.head;

		// re-inject tags
		const { tags } = emotionCache.sheet;

		emotionCache.sheet.flush();
		tags.forEach(tag => {
			// @ts-ignore
			emotionCache.sheet._insertTag(tag);
		});

		// reset cache to reapply global styles
		clientStyles.resetCache();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta content="width=device-width,initial-scale=1" name="viewport" />
				{props.title ? <title>{props.title}</title> : null}
				<Meta />
				<Links />
				{serverStyles?.map(style => (
					<style
						key={style.key}
						dangerouslySetInnerHTML={{ __html: style.css }}
						data-emotion={`${style.key} ${style.ids.join(" ")}`}
					/>
				))}
			</head>
			<body>
				<AllProviders>{props.children}</AllProviders>
				<MemoRouteChangeAnnouncement />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

export const Document = withEmotionCache(BaseDocument);
