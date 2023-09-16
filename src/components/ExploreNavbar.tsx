'use client';
import Image from 'next/image';
import { useState } from 'react';

const exploreCategories = [
	{ name: 'Technology', src: '/technology.svg' },
	{ name: 'Business', src: '/business.svg' },
	{ name: 'Education', src: 'education.svg' },
	{ name: 'Finance', src: '/finance.svg' },
	{ name: 'Science', src: '/science.svg' },
	{ name: 'Sports', src: '/sports.svg' },
];

function ExploreNavbar() {
	const [activeCategory, setActiveCategory] = useState('Technology');
	return (
		<>
			<div className='relative px-4 mt-12'>
				<input className=' placeholder:text-gray-300 w-full py-2 pl-8 bg-zinc-700 rounded' placeholder='Search for News' />
				<Image src='/search.svg' alt='search icon' width={20} height={20} className='absolute top-1/2 -translate-y-1/2 left-6 ' />
			</div>
			<nav className='w-full pl-5 pr-4 py-4 justify-start items-start gap-2 flex overflow-x-auto'>
				{exploreCategories.map((category, index) => (
					<button
						onClick={() => {
							setActiveCategory(category.name);
						}}
						key={index}
						className={`w-full px-4 py-2.5  ${activeCategory === category.name ? 'bg-gray-500 border-white' : 'border-transparent'} border-[1px]  bg-white bg-opacity-10 rounded-full justify-center items-center gap-2 flex`}>
						<Image src={category.src} className='w-4 h-4 relative brightness-0 invert' width={20} height={20} alt={`${category.name} icon`} />
						<div className='text-gray-200 text-sm font-medium'>{category.name}</div>
					</button>
				))}
			</nav>
		</>
	);
}

export default ExploreNavbar;
