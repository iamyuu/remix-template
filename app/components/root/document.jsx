import { Links, LiveReload, Meta, Scripts, ScrollRestoration } from "remix";
import { MemoRouteChangeAnnouncement } from "./route-change-announchement";

/**
 * Document component.
 *
 * @param {Object} props
 * @param {string} [props.title]
 * @param {import('react').ReactNode} props.children
 */
export function Document(props) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta content="width=device-width,initial-scale=1" name="viewport" />
				{props.title ? <title>{props.title}</title> : null}
				<Meta />
				<Links />
			</head>
			<body>
				{props.children}
				<MemoRouteChangeAnnouncement />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
