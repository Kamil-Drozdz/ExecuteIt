'use client';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className='w-full h-screen flex items-center justify-center flex-col'>
			<h2>Something went wrong!</h2>
			<button className='px-3 py-2.5 text-white rounded-full bg-black mt-2' onClick={() => reset()}>
				Try again
			</button>
		</div>
	);
}
