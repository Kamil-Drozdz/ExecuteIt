interface GenerateHeaderProps {
	title: string;
	viewMoreText: string;
}

export function generateHeader({ title, viewMoreText }: GenerateHeaderProps) {
	return (
		<div className='w-full h-[34px] px-0.5 py-2 justify-between items-end flex'>
			<h1 className='text-gray-200 text-base font-bold leading-[17px]'>{title}</h1>
			<div className='text-zinc-500 text-xs font-semibold leading-[14px]'>{viewMoreText}</div>
		</div>
	);
}
