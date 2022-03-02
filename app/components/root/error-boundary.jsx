import { Document } from "./document";

/**
 * Error fallback component.
 *
 * @param {Object} props
 * @param {Error} props.error
 */
export function ErrorBoundary(props) {
	return (
		<Document title="Error!">
			<div role="alert">
				<h1>There was an error</h1>
				<p>{props.error.message}</p>
				<hr />
				<p>Hey, developer, you should replace this with what you want your users to see.</p>
			</div>
		</Document>
	);
}
