import BottomNavbar from '@/components/BottomNavbar';
import PageNavbar from '@/components/PageNavbar';
import { getClient } from '@/lib/client';
import { gql } from '@apollo/client';
import Image from 'next/image';
import Link from 'next/link';

const GET_LAUNCH = gql`
	query Launch($launchId: ID!) {
		launch(id: $launchId) {
			details
			links {
				article_link
				reddit_media
				wikipedia
			}
		}
	}
`;

export default async function launchPage({ params }: { params: { id: string } }) {
	const { id } = params;
	const {
		data: { launch },
	} = await getClient().query({
		query: GET_LAUNCH,
		variables: { launchId: id },
	});

	const renderLinks = () => {
		return Object.entries(launch.links)
			.slice(1)
			.map(([key, value]) => {
				if (value) {
					let linkKey = key;
					if (key === 'article_link') {
						linkKey = 'article';
					} else if (key === 'reddit_media') {
						linkKey = 'reddit';
					}
					return (
						<Link key={key} href={value}>
							<Image alt={`${linkKey} icon`} className='w-5 h-5 relative brightness-0 invert' width={24} height={24} src={`/${linkKey}.svg`} />
						</Link>
					);
				}
				return null;
			});
	};

	return (
		<>
			<PageNavbar />
			<main className='w-full whitespace-pre-wrap text-white'>
				<Image src='https://via.placeholder.com/600x400' alt='main photo' width={600} height={400} className='w-full md:w-fit aspect-video' />
				<div className='w-full px-5 pt-5 pb-4 flex-col justify-start items-start gap-3 flex'>
					<div className=' flex-col justify-start items-start gap-2 flex'>
						<div className=' justify-start items-center gap-1 flex'>
							<Image src='/technology.svg' width={24} height={24} alt='technology icon' className={`w-4 h-4 relative `} />
							<div className='grow shrink basis-0 text-violet-300 text-sm font-semibold uppercase leading-[16.80px]'>Technology</div>
						</div>
						<h3 className=' text-white text-xl font-bold leading-normal'>{launch.title}</h3>
						<div className=' text-zinc-400 text-sm font-medium leading-[16px]'>The Verge — Kyle Barr</div>
					</div>
					<div className=' text-zinc-500 text-xs font-medium leading-[14px]'>2 min read • Jul 13, 2023, 12:31 PM GMT+5:30</div>
					<ul className='justify-center items-center gap-3 flex'>{renderLinks()}</ul>
					<article className='w-full py-2 justify-center items-center gap-2.5 flex break-all '>{launch.details}</article>
				</div>
			</main>
			<BottomNavbar />
		</>
	);
}
