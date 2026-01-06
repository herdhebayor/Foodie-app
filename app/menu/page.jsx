/** @format */

import React from 'react'
import Link from 'next/link'

const MenuPage = () => {
	return (
		<section className='py-4 px-6 bg-gray-100 min-h-screen block '>
			<h1 className='text-2xl font-bold mb-4 w-full text-center py-4'>Menu</h1>
			<Link
				href='menu/main-course'
				className='relative mb-4 text-white w-full h-[12.5rem] block rounded-md border border-gray-300'
			>
				<img
					src='/images/cat-fish-BBQ.jpg'
					alt='Main Course'
					className='max-h-[12.5rem] rounded-md w-full object-cover'
				/>
				<div
					className='absolute top-0 left-0 bg-black/50 w-full h-[12.5rem]  rounded-md flex flex-col items-center
                justify-center'
				>
					<h2 className='text-white text-lg font-semibold'>Main Course</h2>
					<p>Explore our delicious main course options.</p>
				</div>
			</Link>

			<Link
				href='menu/swallow'
				className='relative mb-4 w-full h-[12.5rem] text-white block rounded-md border border-gray-300'
			>
				<img
					src='/images/amala-wrap.jpg'
					alt='Swallow'
					className='w-full h-full rounded-md object-cover'
				/>
				<div
					className='absolute top-0 left-0 bg-black/50 w-full h-full  rounded-md flex flex-col items-center
                justify-center'
				>
					<h2 className='text-white text-lg font-semibold'>Swallow</h2>
					<p>Explore our delicious swallow options.</p>
				</div>
			</Link>

			<Link
				href='menu/chops'
				className='relative mb-4 w-full h-[12.5rem] text-white block rounded-md border border-gray-300'
			>
				<img
					src='/images/turkey.jpg'
					alt='Chops'
					className='w-full h-full rounded-md object-cover'
				/>
				<div
					className='absolute top-0 left-0 bg-black/50 w-full h-[12.5rem]  rounded-md flex flex-col items-center
                justify-center'
				>
					<h2 className='text-white text-lg font-semibold'>Chops</h2>
					<p>Explore our delicious chops options.</p>
				</div>
			</Link>

			<Link
				href='menu/proteins'
				className='relative mb-4 w-full h-[12.5rem] text-white block rounded-md border border-gray-300'
			>
				<img
					src='/images/full-chick.jpg'
					alt='Proteins'
					className='w-full h-full object-cover'
				/>
				<div
					className='absolute top-0 left-0 bg-black/50 w-full h-[12.5rem]  rounded-md flex flex-col items-center
                justify-center'
				>
					<h2 className='text-white text-lg font-semibold'>Proteins</h2>
					<p>Explore our delicious proteins options.</p>
				</div>
			</Link>

			<Link
				href='menu/drinks'
				className='relative mb-4 w-full text-white h-[12.5rem] block rounded-md border border-gray-300'
			>
				<img
					src='/images/suya.jpg'
					alt='Drinks'
					className='w-full h-full object-cover'
				/>
				<div
					className='absolute top-0 left-0 bg-black/50 w-full h-[12.5rem]  rounded-md flex flex-col items-center
                justify-center'
				>
					<h2 className='text-white text-lg font-semibold'>Drinks</h2>
					<p>Explore our delicious drinks options.</p>
				</div>
			</Link>
		</section>
	)
}

export default MenuPage
