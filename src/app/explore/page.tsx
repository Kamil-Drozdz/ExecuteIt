import BottomNavbar from '@/components/BottomNavbar';
import ExploreNavbar from '@/components/ExploreNavbar';
import ItemExploreSkeleton from '@/components/skeletons/ItemExploreSkeleton';
import { generateHeader } from '@/helpers/generateHeader';
import { getClient } from '@/lib/client';
import React, { Suspense } from 'react';
import { gql } from '@apollo/client';

const GET_LAUNCHES = gql`
	query Launches($find: LaunchFind, $limit: Int) {
		launches(find: $find, limit: $limit) {
			id
			mission_name
		}
	}
`;

export default async function ExplorePage() {
	const ExploreContentArticle = React.lazy(() => import('@/components/ExploreContentArticle'));
	const {
		data: { launches },
	} = await getClient().query({ query: GET_LAUNCHES, variables: { limit: 10 } });
	const header = generateHeader({ title: 'Recent News', viewMoreText: 'View more' });

	return (
		<>
			<ExploreNavbar />
			<main className='w-full px-4'>
				{header}
				<Suspense fallback={<ItemExploreSkeleton SkeletonLength={3} />}>
					<ExploreContentArticle launches={launches} />
				</Suspense>
			</main>
			<BottomNavbar />
		</>
	);
}
