import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Explorer',
	description: 'Created by Kamil Dróżdż',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className='bg-[#121212] text-white'>{children}</body>
		</html>
	);
}
