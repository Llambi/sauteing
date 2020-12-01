import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Circle,
	Grid,
	GridItem,
	Heading,
	Stack,
	useColorMode,
	useTheme,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const Layout = ({ children }: PropsWithChildren<Props>) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const theme = useTheme();

	return (
		<Grid templateRows="repeat(2, 1fr)">
			<GridItem>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					w="100%"
					p={4}
					backgroundColor={colorMode === 'light' ? theme.colors.gray[100] : theme.colors.gray[700]}
					borderBottom={`5px solid ${theme.colors.green[300]}`}
					position="sticky"
					top="0"
					zIndex="99"
				>
					<Box display="flex" alignItems="center">
						🍳
						<Heading as="h1" size="md" marginLeft="8px">
							Sautering.me
						</Heading>
					</Box>
					<Stack spacing={4} direction="row" align="center">
						<Circle>
							<Button onClick={toggleColorMode}>
								{colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
							</Button>
						</Circle>
					</Stack>
				</Box>
			</GridItem>
			<GridItem>{children}</GridItem>
		</Grid>
	);
};
