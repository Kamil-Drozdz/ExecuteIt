import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';

interface History {
	title: string;
	id: string;
	details: string;
	links: {
		article: string;
		reddit: string;
		wikipedia: string;
	};
}
const GET_HISTORIES = gql`
	query Histories($find: HistoryFind) {
		histories(find: $find) {
			title
			id
			details
			links {
				article
				reddit
				wikipedia
			}
		}
	}
`;

const FeedContentSection = async () => {
	const { data } = await getClient().query({ query: GET_HISTORIES });
	return (
		<section className='w-full text-white whitespace-pre-wrap mb-12'>
			{data.histories.map((history: History) => (
				<Link key={history.id} href={`/feed/${history.id}`}>
					<div className='w-full my-2 p-2 bg-neutral-900 rounded-lg flex-col justify-start items-start gap-2 flex'>
						<div className=' justify-start items-center gap-2 flex'>
							<Image loading='lazy' alt='placeholder image' width={80} height={62} className='w-20 h-[62px] rounded' src='https://via.placeholder.com/80x62' />
							<div className='grow shrink basis-0 pr-1 pt-1 flex-col justify-start items-start gap-1 flex'>
								<div className=' justify-start items-center gap-0.5 flex'>
									<div className='text-zinc-500 text-xs font-medium leading-[14.40px]'>The Verge • Google AI</div>
								</div>
								<h2>{history.title}</h2>
							</div>
						</div>
						<div className='w-full pl-1 py-0.5 justify-between items-center flex'>
							<div className='text-zinc-500 text-[10px] font-medium leading-3'>Jul 13, 2023 • 2 min read</div>
							<div className='flex space-x-2'>
								<Image src='/saved.svg' width={18} height={18} alt='saved icon' className={`w-4 h-4 relative `} />
								<Image src='/dots.svg' width={18} height={18} alt='more options icon' className={`w-4 h-4 relative `} />
							</div>
						</div>
					</div>
				</Link>
			))}
		</section>
	);
};

export default FeedContentSection;
