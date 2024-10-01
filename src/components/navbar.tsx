import Logo from '@/assets/himauntika.png';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Languages, Menu, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar(): JSX.Element {
	const [mode, set_mode] = useState<'dark' | 'light'>('light');

	useEffect(() => {
		const saved_mode = localStorage.getItem('theme') as 'dark' | 'light' | null;
		if (saved_mode) {
			set_mode(saved_mode);
			document.documentElement.classList.toggle('dark', saved_mode === 'dark');
		}
	}, []);

	const menu_list = [
		{ href: 'profile', name: 'Profile' },
		{ href: 'divisi', name: 'Divisi' },
		{ href: 'study_class', name: 'Study Class' },
		{ href: 'pendaftaran', name: 'Pendaftaran' }
	];

	const toggle = () => {
		const new_mode = mode === 'light' ? 'dark' : 'light';
		set_mode(new_mode);
		localStorage.setItem('theme', new_mode);
		document.documentElement.classList.toggle('dark', new_mode === 'dark');
	};

	return (
		<nav className="w-full h-16 flex items-center justify-between border-b px-8 max-lg:py-2 max-lg:px-4">
			<div className="flex items-center gap-12">
				<div className='flex items-center gap-3'>
					<img src={Logo.src} alt='LogoHimauntika' width={50} height={50} loading='lazy' decoding='async' className='max-lg:w-[40px]' />
					<h1 className='font-open-sans font-bold text-xl uppercase'>Himauntika</h1>
				</div>
				<ul className="flex items-center gap-3 max-[976px]:hidden">
					{menu_list.map((v, i) =>
						<li key={i}><a href={`/${v.href}`} className='hover:bg-gray-100 dark:hover:bg-gray-800 p-[0.6rem] rounded font-open-sans font-semibold text-[0.95rem]'>{v.name}</a></li>
					)}
				</ul>
			</div>
			<div className="flex items-center gap-6 max-[976px]:hidden">
				<button onClick={toggle} className='hover:bg-gray-100 dark:hover:bg-gray-800 p-[0.6rem] rounded'>{mode === 'dark' ? <Moon /> : <Sun />}</button>
				<button className='hover:bg-gray-100 dark:hover:bg-gray-800 p-[0.6rem] rounded'><Languages /></button>
				<button className='hover:bg-gray-100 dark:hover:bg-gray-800 p-[0.6rem] rounded'><GitHubLogoIcon className='w-6 h-6' /></button>
			</div>
			<button className='hidden max-[976px]:block'><Menu /></button>
		</nav>
	);
}
