'use client';

import Image from 'next/image';
import { useState } from 'react';

const navbarItems = [
	{
		src: '/fakeHamburger.svg',
		alt: 'menu icon',
	},
	{
		src: '/search.svg',
		alt: 'search icon',
	},
	{
		src: '/notification.svg',
		alt: 'notification icon',
	},
	{
		src: '/avatar.webp',
		alt: 'user avatar',
	},
];
const categories = [{ name: 'Tech' }, { name: 'Science' }, { name: 'Education' }, { name: 'Business' }, { name: 'Sports' }];

function TopNavbar() {
	const [activeCategory, setActiveCategory] = useState('Tech');
	return (
		<nav>
			<div className='flex justify-between px-4 my-6'>
				<Image src={navbarItems[0].src} alt={navbarItems[0].alt} width={24} height={24} className={`w-7 h-7 relative `} />
				<div className='flex space-x-2'>
					{navbarItems.slice(1).map((item, index) => (
						<Image key={index} src={item.src} width={24} height={24} alt={item.alt} className={`w-7 h-7 relative `} />
					))}
				</div>
			</div>
			<ul className='w-full justify-start  mb-4 items-center flex overflow-x-auto'>
				{categories.map((category, index) => (
					<li key={index} className={`p-4 border-b-2 ${activeCategory === category.name ? 'border-red-500' : 'border-gray-800'} justify-center items-center gap-2 flex`}>
						<button className={`text-base font-semibold leading-[17px] ${activeCategory === category.name ? 'text-white' : 'text-gray-400'}`} onClick={() => setActiveCategory(category.name)}>
							{category.name}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default TopNavbar;
