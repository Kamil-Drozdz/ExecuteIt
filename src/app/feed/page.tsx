import BottomNavbar from '@/components/BottomNavbar';
import TopNavbar from '@/components/FeedNavbar';
import { generateHeader } from '@/helpers/generateHeader';
import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import dynamic from 'next/dynamic';
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

const DynamicImage = dynamic(() => import('next/image'), { loading: () => <div>Loading...</div> });

export default async function FeedPage() {
	try {
		const { data } = await getClient().query({ query: GET_HISTORIES });
		const header = generateHeader({ title: 'Top Stories', viewMoreText: 'see all' });
		return (
			<>
				<TopNavbar />
				<main className='p-4 flex flex-col items-center'>
					<div className='w-full max-w-[400px] relative'>
						<div className='absolute top-4 left-1/2 -translate-x-1/2 w-8 h-3 px-1.5 py-1 bg-neutral-500 rounded-[25px] backdrop-blur-[20px] justify-center items-center gap-1 flex'>
							<div className='w-1 h-1 relative opacity-30 bg-white rounded-[25px]'></div>
							<div className='w-1 h-1 relative bg-white rounded-[25px]'></div>
							<div className='w-1 h-1 relative opacity-30 bg-white rounded-[25px]'></div>
						</div>
						<Image src='/main-photo.webp' alt='main content photo' width={400} height={300} />
						<div className='absolute bottom-4 px-4 justify-between items-start gap-1 flex w-full'>
							<div>
								<div className='text-zinc-400 text-[10px] font-medium leading-3'>DJI • Jul 10, 2023d</div>
								<div className=' text-white text-base font-bold leading-[17px]'>A month with DJI Mini 3 Pro</div>
							</div>
							<Image src='/arrow-right.svg' width={24} height={24} alt='arrow icon ' className='w-6 h-6' />
						</div>
					</div>
					{header}
					<section className='w-full text-white whitespace-pre-wrap mb-12'>
						{data.histories.map((history: History) => (
							<Link key={history.id} href={`/feed/${history.id}`}>
								<div className='w-full my-2 p-2 bg-neutral-900 rounded-lg flex-col justify-start items-start gap-2 flex'>
									<div className=' justify-start items-center gap-2 flex'>
										<DynamicImage loading='lazy' alt='placeholder image' width={80} height={62} className='w-20 h-[62px] rounded' src='https://via.placeholder.com/80x62' />
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
				</main>
				<BottomNavbar />
			</>
		);
	} catch (error) {
		console.error('Error:', error);
		return <div className='text-white'>Oops! Something went wrong.</div>;
	}
}
