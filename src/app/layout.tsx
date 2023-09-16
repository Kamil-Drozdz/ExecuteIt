import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Explorer',
	description: 'Created by Kamil Dróżdż',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className='bg-[#0e0d0d] text-white'>{children}</body>
		</html>
	);
}
