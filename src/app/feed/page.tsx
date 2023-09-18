import BottomNavbar from '@/components/BottomNavbar';
import FeedContentSection from '@/components/FeedContentSection';
import TopNavbar from '@/components/FeedNavbar';
import ItemFeedSkeleton from '@/components/skeletons/ItemFeedSkeleton';
import { generateHeader } from '@/helpers/generateHeader';
import Image from 'next/image';
import React, { Suspense } from 'react';

export default async function FeedPage() {
	const header = generateHeader({ title: 'Top Stories', viewMoreText: 'see all' });
	return (
		<>
			<TopNavbar />
			<main className='px-4 flex flex-col items-center'>
				<div className='w-full  relative'>
					<div className='absolute top-4 left-1/2 -translate-x-1/2 w-8 h-3 px-1.5 py-1 bg-neutral-500 rounded-[25px] backdrop-blur-[20px] justify-center items-center gap-1 flex'>
						<div className='w-1 h-1 relative opacity-30 bg-white rounded-[25px]'></div>
						<div className='w-1 h-1 relative bg-white rounded-[25px]'></div>
						<div className='w-1 h-1 relative opacity-30 bg-white rounded-[25px]'></div>
					</div>
					<Image src='/main-photo.webp' loading='eager' alt='main content photo' width={500} height={400} />
					<div className='absolute bottom-4 px-4 justify-between items-start gap-1 flex w-full'>
						<div>
							<div className='text-zinc-400 text-[10px] font-medium leading-3'>DJI • Jul 10, 2023d</div>
							<div className=' text-white text-base font-bold leading-[17px]'>A month with DJI Mini 3 Pro</div>
						</div>
						<Image src='/arrow-right.svg' width={24} height={24} alt='arrow icon ' className='w-6 h-6' />
					</div>
				</div>
				{header}
				<Suspense fallback={<ItemFeedSkeleton SkeletonLength={4} />}>
					<FeedContentSection />
				</Suspense>
			</main>
			<BottomNavbar />
		</>
	);
}
