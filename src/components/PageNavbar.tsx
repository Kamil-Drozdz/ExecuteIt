'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const navbarItems = [
	{
		src: '/arrow-left.svg',
		alt: 'back to main page icon',
	},
	{
		src: '/text-icon.svg',
		alt: 'change letters to capital icon',
	},
	{
		src: '/saved.svg',
		alt: 'saved icon',
	},
	{
		src: '/dots.svg',
		alt: 'more options icon',
	},
];
function PageNavbar() {
	const router = useRouter();

	return (
		<nav>
			<div className='flex justify-between px-4 my-6'>
				<button onClick={() => router.back()}>
					<Image src={navbarItems[0].src} alt={navbarItems[0].alt} width={24} height={24} className={`w-7 h-7 relative `} />
				</button>
				<div className='flex space-x-2'>
					{navbarItems.slice(1).map((item, index) => (
						<button>
							<Image key={index} src={item.src} width={24} height={24} alt={item.alt} className={`w-7 h-7 relative  brightness-[300]`} />
						</button>
					))}
				</div>
			</div>
		</nav>
	);
}

export default PageNavbar;
