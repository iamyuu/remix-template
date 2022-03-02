import { Outlet } from "remix";
import { Document } from "~/components/root";
import * as site from "~/constants/site";

export { CatchBoundary, ErrorBoundary } from "~/components/root";

/**
 * @type {import('remix').MetaFunction}
 */
export function meta() {
	return site;
}

/**
 * Root components.
 * Used for rendering the document and the app.
 */
export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	);
}
