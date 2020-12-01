import { Center, Container, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';

import { Layout } from '../components/Layout';

export default function Home() {
	return (
		<>
			<Head>
				<title>Home | Sauteing</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Center minH="25vh">
					<Container
						centerContent
						border={'1px  solid'}
						borderRadius="lg"
						borderColor="green.300"
						m={5}
						p={5}
					>
						<Stack>
							<Text fontSize="m">We're cooking delicious things here!</Text>
							<Text fontSize="m">Just grab some popcorn and wait a little longer 😄</Text>
						</Stack>
					</Container>
				</Center>
			</Layout>
		</>
	);
}
