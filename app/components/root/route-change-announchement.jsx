import * as React from "react";
import { useLocation } from "remix";
import { title as defaultTitle } from "~/constants/site";

/**
 * Provides an alert for screen reader users when the route changes.
 */
function RouteChangeAnnouncement() {
	const [hydrated, setHydrated] = React.useState(false);
	const [innerHtml, setInnerHtml] = React.useState("");
	const location = useLocation();

	React.useEffect(() => {
		setHydrated(true);
	}, []);

	const firstRenderRef = React.useRef(true);
	React.useEffect(() => {
		if (firstRenderRef.current) {
			firstRenderRef.current = false;
			return;
		}

		const pageTitle = location.pathname === "/" ? defaultTitle : document.title;
		setInnerHtml(`Navigated to ${pageTitle}`);
	}, [location.pathname]);

	if (!hydrated) {
		return null;
	}

	return (
		<div
			aria-atomic
			aria-live="assertive"
			id="route-change-region"
			style={{
				border: "0",
				clipPath: "inset(100%)",
				clip: "rect(0 0 0 0)",
				height: "1px",
				margin: "-1px",
				overflow: "hidden",
				padding: "0",
				position: "absolute",
				width: "1px",
				whiteSpace: "nowrap",
				wordWrap: "normal",
			}}
		>
			{innerHtml}
		</div>
	);
}

export const MemoRouteChangeAnnouncement = React.memo(RouteChangeAnnouncement);
