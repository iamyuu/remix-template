import { createContext } from "react";

const ClientStyleContext = createContext({
	resetCache: () => {},
});

export default ClientStyleContext;
