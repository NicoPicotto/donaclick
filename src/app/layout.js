import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Navbar from './Components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'DonáClick',
	description: '',
};

export default function RootLayout({ children }) {
	return (
		<html lang='es'>
			<body>
				<Providers>
					<Navbar />
					<div>{children}</div>
				</Providers>
			</body>
		</html>
	);
}
