import React from 'react'
import Link from 'next/link'
import Booking from './Booking'
import Reviews from './Reviews'
import {GiHotMeal} from 'react-icons/gi'
import { MdOutlineDeliveryDining, MdDinnerDining } from 'react-icons/md'
import { FaBuilding } from 'react-icons/fa'

function Feature() {

    // dark = background:slate-700, text:white, btn:orange-300
    // light = background:white, text:slate-700, btn:orange-300
  return (
		<section className='bg-gray-300 py-4 px-3 block'>
			<div className='text-slate-900 p-4'>
				<h1 className='text-3xl font-bold'>About Us</h1>
				<p>
					Foodie is a restaurant that serves one of the best hand-cooked
					traditional dishes that satiate your cravings for authentic flavors.
				</p>
				<Link
					href='/about'
					className='inline-block mt-4 px-6 py-2 text-white bg-slate-900   hover:bg-slate-700'
				>
					Learn More
				</Link>
			</div>

			<div className='p-4 block'>
				<h2 className='text-2xl font-bold mb-6'>Our Service</h2>
				<div className='my-4'>
					<div className=' bg-slate-900 block roundend-md w-[90%] h-75'>
						<img
							src='/images/delivery.webp'
							alt='Fast Delivery'
							className='w-full h-full roundend-md'
						/>
					</div>
					<h1 className='text-xl font-semibold my-4 flex gap-3'>
						<span className='text-white block bg-amber-600 p-1 rounded-full w-fit'>
							<MdOutlineDeliveryDining />
						</span>{' '}
						Fast Delivery
					</h1>
					<p>
						At Foodie, we understand that our customers lead busy lives. That's
						why we offer fast and reliable delivery services to ensure that your
						favorite dishes reach you as quickly as possible.
					</p>
					<Link
						href='/menu'
						className='inline-block mt-4 px-6 py-2 text-white bg-amber-600 hover:bg-amber-500'
					>
						More...
					</Link>
				</div>
				<div className='my-4'>
					<div className=' bg-slate-900 roundend-md  block w-[90%] h-75 ml-auto'>
						<img
							src='/images/meal.webp'
							alt='Fast Delivery'
							className='w-full h-full roundend-md'
						/>
					</div>
					<h1 className='text-xl font-semibold my-4 flex gap-3'>
						<span className='text-white block bg-amber-600 p-1 rounded-full w-fit'>
							<GiHotMeal />
						</span>
						Food To Taste
					</h1>
					<p>
						At Foodie, we believe that food should not only be delicious but
						also an experience to savor. Our chefs are dedicated to crafting
						dishes that tantalize your taste buds and leave you craving for
						more.
					</p>
					<Link
						href='/menu'
						className='inline-block mt-4 px-6 py-2 text-white bg-amber-600 hover:bg-amber-500'
					>
						See Our Menu
					</Link>
				</div>
				<div className='my-4'>
					<div className=' bg-slate-900 block w-[90%] roundend-md h-75'>
						<img
							src='/images/enviroment.webp'
							alt='Fast Delivery'
							className='w-full h-full roundend-md'
						/>
					</div>
					<h1 className='text-xl font-semibold my-4 flex gap-3'>
						<span className='text-white block bg-amber-600 p-1 rounded-full w-fit'>
							<FaBuilding />
						</span>
						Condusive And Save Environment
					</h1>
					<p>
						At Foodie, we prioritize sustainability and strive to create a
						condusive and safe environment for our customers and staff. Our
						commitment to eco-friendly practices ensures that you can enjoy your
						meals with peace of mind.
					</p>
					<Link
						href='/gallery'
						className='inline-block mt-4 px-6 py-2 text-white bg-amber-600 hover:bg-amber-500'
					>
						See Our Gallery
					</Link>
				</div>
				<div className='my-4'>
					<div className=' bg-slate-900 block w-[90%] roundend-md h-75'>
						<img
							src='/images/dining.webp'
							alt='Fast Delivery'
							className='w-full h-full roundend-md'
						/>
					</div>
					<h1 className='text-xl font-bold my-4 text-slate-900 flex gap-3'>
						<span className='text-white block bg-amber-600 p-1 rounded-full w-fit'>
							<MdDinnerDining />
						</span>
						Enjoy the weekend with family and friends
					</h1>
					<p>
						At Foodie, we believe that food is best enjoyed in the company of
						loved ones. That's why we invite you to spend your weekends with us,
						sharing delicious meals and creating lasting memories with family
						and friends.
					</p>
					<Link
						href='#bookings'
						className='inline-block mt-4 px-6 py-2 text-white bg-amber-600 hover:bg-amber-500'
					>
						Book a table
					</Link>
				</div>
			</div>
			<Reviews />
			<Booking />
			{/* Sponsors */}
			<div className='flex justify-center items-center py-12'>
				<div>
					<img
						src='/images/sponsors.png'
						alt='sponsors'
						className='w-full h-full'
					/>
				</div>
				<div>
					<img
						src='/images/sponsors.png'
						alt='sponsors'
						className='w-full h-full'
					/>
				</div>
				<div>
					<img
						src='/images/sponsors.png'
						alt='sponsors'
						className='w-full h-full'
					/>
				</div>
				<div>
					<img
						src='/images/sponsors.png'
						alt='sponsors'
						className='w-full h-full'
					/>
				</div>
				<div>
					<img
						src='/images/sponsors.png'
						alt='sponsors'
						className='w-full h-full'
					/>
				</div>
			</div>
		</section>
	)
}

export default Feature