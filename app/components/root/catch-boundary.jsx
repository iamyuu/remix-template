import { useCatch } from "remix";
import { Document } from "./document";

/**
 * Catch all errors and render an error page.
 */
export function CatchBoundary() {
	const caught = useCatch();

	let message;
	switch (caught.status) {
		case 404:
			message = <p>Oops! Looks like you tried to visit a page that does not exist.</p>;
			break;

		default:
			throw new Error(caught.data || caught.statusText);
	}

	return (
		<Document title={`${caught.status} ${caught.statusText}`}>
			<h1>
				{caught.status}: {caught.statusText}
			</h1>
			{message}
		</Document>
	);
}
