import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';

interface Launch {
	id: string;
	mission_name: string;
}

const GET_LAUNCHES = gql`
	query Launches($find: LaunchFind, $limit: Int) {
		launches(find: $find, limit: $limit) {
			id
			mission_name
		}
	}
`;
const ExploreContentArticle = async () => {
	const {
		data: { launches },
	} = await getClient().query({ query: GET_LAUNCHES, variables: { limit: 10 } });

	return (
		<article className='flex overflow-x-auto '>
			{launches.map((launch: Launch) => (
				<Link href={`/explore/${launch.id}`} key={launch.id} className='mx-2 w-44 min-w-[176px] max-w-[180px] p-2 bg-stone-900 rounded-lg flex-col justify-start items-start gap-3 flex'>
					<div className=' flex-col justify-center items-start gap-2 flex'>
						<Image width={166} alt='article photo' height={104} className='self-stretch h-24 rounded' src='https://via.placeholder.com/166x104' />
						<div className='self-stretch h-20 px-0.5 pt-0.5 flex-col justify-start items-start gap-1 flex'>
							<div className='text-zinc-500 text-xs font-medium '>Microsoft • 5 min read</div>
							<div className='self-stretch grow shrink basis-0 justify-start items-start gap-2.5 flex'>
								<div className='grow shrink basis-0 text-gray-200 text-base font-semibold '>{launch.mission_name}</div>
							</div>
						</div>
					</div>
					<div className='self-stretch px-1 py-0.5 my-1 justify-between items-center flex'>
						<div className="text-zinc-500 text-xs font-medium font-['Inter'] leading-3">Jul 14, 2023</div>
						<Image src='/saved.svg' width={18} height={18} alt='saved icon' className={`w-4 h-4 relative `} />
					</div>
				</Link>
			))}
		</article>
	);
};

export default ExploreContentArticle;
