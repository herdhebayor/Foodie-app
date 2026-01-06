/** @format */

'use client'

import React, { useState, useEffect } from 'react'

const slides = [
	{
		image: 'Asun-meat.jpg',
		tittle: 'Explore Our Menu',
		subtittle:
			'Experience the true taste of finest of the hand made Nigerain Dishes',
		link: '/menu',
	},
	{
		image: 'cat-fish-BBQ.jpg',
		tittle: 'Enjoy The evening with loved Ones',
		subtittle: 'Share a memorable evening with that special one today',
		link: '/booking',
	},
	{
		image: 'croaker-grill.jpg',
		tittle: 'Indulge in Delectable Desserts',
		subtittle: 'Satisfy your sweet tooth with our exquisite dessert selection',
		link: '',
	},
	{
		image: 'turkey.jpg',
		tittle: 'Explore Our Environment',
		subtittle:
			'Take a quick look at our environment, clean and condusive to match your satifaction',
		link: '/gallery',
	},
]

function Hero() {
	const [slide, setSlide] = useState(0)

	//Carousle autoplay
	useEffect(() => {
		const interval = setInterval(() => {
			setSlide((prevSlide) => (prevSlide + 1) % slides.length)
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	return (
		<section className='relative h-[30vh] md:h-[80vh] w-full overflow-hidden'>
			{slides.map((s, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-1000 ${
						index === slide ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<img
						src={`/images/${s.image}`}
						alt={s.tittle}
						className='w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-4'>
						<h2 className='text-2xl md:text-4xl font-bold mb-2'>
							{s.tittle}
						</h2>
						<p className='text-lg md:text-xl mb-4'>{s.subtittle}</p>
						<a
							href={s.link}
							className='bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors'
						>
							Learn More
						</a>
					</div>
				</div>
			))}
			{/* Carousel Navigation Dots */}
			<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
				{slides.map((_, index) => (
					<button
						key={index}
						className={`h-2 w-2 rounded-full transition-all ${
							index === slide ? 'bg-yellow-600' : 'bg-gray-300'
						}`}
						onClick={() => setSlide(index)}
					/>
				))}
			</div>
		</section>
	)
}

export default Hero
