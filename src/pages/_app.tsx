import '../../styles/globals.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Head from 'next/head';

const config = {
	useSystemColorMode: true,
	initialColorMode: 'dark',
};
const customTheme = extendTheme({ config });

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Sautering.me</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ChakraProvider theme={customTheme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
