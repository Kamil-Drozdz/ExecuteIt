'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navbarItems = [
	{
		src: '/feed.svg',
		alt: 'feed icon',
		label: 'Feed',
		link: '/feed',
	},
	{
		src: '/explore.svg',
		alt: 'explore icon',
		label: 'Explore',
		link: '/explore',
	},
	{
		src: '/saved.svg',
		alt: 'saved icon',
		label: 'Saved',
		link: '/saved',
	},
	{
		src: '/profile.svg',
		alt: 'profile icon',
		label: 'Profile',
		link: '/profile',
	},
];
function BottomNavbar() {
	const pathname = usePathname();

	return (
		<nav className='fixed bottom-0 w-full  px-6 py-2 bg-neutral-900 bg-opacity-80 border-t border-white border-opacity-5 backdrop-blur-[100px] justify-between items-start flex'>
			{navbarItems.map((item, index) => {
				const isActive = pathname.includes(item.link);
				return (
					<Link href={item.link} key={index} className={`w-fit px-4 py-1 rounded flex-col justify-start items-center gap-1 flex ${isActive ? 'text-gray-200' : 'text-gray-500'}`}>
						<Image src={item.src} width={24} height={24} alt={item.alt} className={`w-6 h-6 relative  ${isActive ? 'brightness-[300]' : ''}`} />
						<div className=' text-[10px] font-bold leading-3'>{item.label}</div>
					</Link>
				);
			})}
		</nav>
	);
}

export default BottomNavbar;
