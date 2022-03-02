import { ChakraProvider } from "@chakra-ui/react";
import theme from "~/theme";

/**
 * Root providers used on the top-level tree application.
 *
 * @param {Object} props
 * @param {import('react').ReactNode} props.children
 */
export default function AllProviders(props) {
	return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
}
