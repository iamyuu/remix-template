import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";

/**
 * @type {import('remix').MetaFunction}
 */
export function meta() {
	return { title: "New Remix App" };
}

/**
 * Root components.
 * Used for rendering the document and the app.
 */
export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta content="width=device-width,initial-scale=1" name="viewport" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
