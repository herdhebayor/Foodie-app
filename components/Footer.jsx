import { IoFastFood } from 'react-icons/io5'
import { FaFacebook,FaTwitterSquare, FaInstagram,FaTiktok, FaPhone, FaWhatsapp } from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'

const Footer = ()=>{

    return (
			<>
				<section className='flex relative w-screen  pb-10 gap-6  md:gap-10 justify-center md:justify-between md:items-center py-4 px-2 md:p-4 bg-gray-800 text-white'>
					{/* Logo and socials */}
					<section className='flex flex-col'>
						{/* Logo */}
						<div className='flex items-center gap-4'>
							<IoFastFood color='red' size={40} />{' '}
							<span className='text-2xl font-bold'>Foodie</span>
						</div>
						{/* Socials */}
						<div className='flex items-center gap-4 mt-6'>
							<FaFacebook className='text-yellow-600' size={30} />
							<FaTwitterSquare className='text-yellow-600' size={30} />
							<FaInstagram className='text-yellow-600' size={30} />
							<FaTiktok className='text-yellow-600' size={30} />
						</div>
					</section>

					{/* Quick Links/ Branche*/}
					<section className='flex gap-4 md:gap-6'>
						<ul>
							<li>
								<a href='#' className='hover:text-yellow-600'>
									About Us
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-yellow-600'>
									Menu
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-yellow-600'>
									Contact
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-yellow-600'>
									Privacy Policy
								</a>
							</li>
						</ul>

						{/* Branches and contacts */}
						<div className='text-sm'>
							<h2>Walk into our Branches</h2>
							<div>
								<div className='mb-2'>
									<p>
										<FaLocationDot className='inline-block text-yellow-600' />{' '}
										123 Main St, Cityville
									</p>
									<p>
										<FaPhone className='inline-block text-yellow-600' />{' '}
										123-456-7890
									</p>
									<p>
										<FaWhatsapp className='inline-block text-yellow-600' />{' '}
										123-456-7890
									</p>
								</div>
								<hr />
								<div className='mt-2'>
									<p>
										<FaLocationDot className='inline-block text-yellow-600' />{' '}
										123 Main St, Cityville
									</p>

									<p>
										<FaPhone className='inline-block text-yellow-600' />{' '}
										123-456-7890
									</p>

									<p>
										<FaWhatsapp className='inline-block text-yellow-600' />{' '}
										123-456-7890
									</p>
								</div>
								
							</div>
						</div>
					</section>

					{/* Copy right */}
					<div className='absolute bottom-3 text-sm left-0 right-0 mx-auto w-full text-center  bg-transparent'>
						&copy; 2023 Foodie. All rights reserved.
					</div>
				</section>
			</>
		)
}


export default Footer