import { Facebook, Instagram, Mail, MapPinHouse } from 'lucide-react';

export default function Footer(): JSX.Element {
	return (
		<footer className='w-full h-fit px-8 py-3 flex items-center justify-between border-t max-[976px]:flex-col max-[976px]:gap-4 max-[976px]:py-6'>
			<div className='flex items-center gap-3'>
				<MapPinHouse size={35} />
				<p className='font-open-sans text-sm'>Gedung Lama Lt.2 Jl. Maulana Yusuf No.10, Babakan.<br /> Kec. Tangerang, Kota Tangerang, Banten 15118</p>
			</div>

			<div className='flex items-center gap-12 max-[976px]:flex-col-reverse max-[976px]:gap-2'>
				<p className='text-sm font-open-sans'>Copyright © 2024 - HIMAUNTIKA</p>
				<div className='flex items-center gap-4'>
					<a className='hover:bg-gray-100 dark:hover:bg-gray-800 p-[0.6rem] rounded' href='/'><Instagram /></a>{ /** Instagram icon */}
					<a className='hover:bg-gray-100 dark:hover:bg-gray-800 p-[0.6rem] rounded' href='/'><Facebook /></a>
					<button className='hover:bg-gray-100 dark:hover:bg-gray-800 p-[0.6rem] rounded'><svg role="img" color='black' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<title>Gmail</title>
						<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
					</svg></button> { /** Email icon */}
				</div>
			</div>
		</footer>
	);
}