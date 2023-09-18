import BottomNavbar from '@/components/BottomNavbar';
import ExploreNavbar from '@/components/ExploreNavbar';
import ItemExploreSkeleton from '@/components/skeletons/ItemExploreSkeleton';
import { generateHeader } from '@/helpers/generateHeader';
import React, { Suspense } from 'react';
import ExploreContentArticle from '@/components/ExploreContentArticle';

export default async function ExplorePage() {
	const header = generateHeader({ title: 'Recent News', viewMoreText: 'View more' });

	return (
		<>
			<ExploreNavbar />
			<main className='w-full px-4'>
				{header}
				<Suspense fallback={<ItemExploreSkeleton SkeletonLength={10} />}>
					<ExploreContentArticle />
				</Suspense>
			</main>
			<BottomNavbar />
		</>
	);
}
