/** @format */
'use client'
import {useState} from 'react'
import {
	FaHome,
	FaSearch,
	FaClipboardList,
	FaUserCircle,
} from 'react-icons/fa'
import { MdOutlineFoodBank, MdLogin, MdNotificationsNone } from 'react-icons/md'
import { IoFastFood } from 'react-icons/io5'
import Link from 'next/link'

const Navbar = () => {
	const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)
	const [showProfileMenu, setShowProfileMenu] = useState(false)
	const [showSearchInput, setShowSearchInput] = useState(false)
	return (
		<>
			<section className='bg-slate-900 text-white relative right-0 top-0 w-full py-6 px-4 flex justify-between items-center'>
				<div className='flex items-center justify-between'>
					{/* Logo */}
					<div className='mr-15 text-2xl font-bold cursor-pointer '>
						<IoFastFood color='red' size={40} />
					</div>

					{/* Nav Menu . show menu name on desktop, show icon on mobile */}
					<ul className='flex md:gap-6 gap-12 justify-between decoration-0 list-none '>
						<li className=' cursor-pointer'>
							<Link href='/' className='flex items-center gap-2'>
								<FaHome className='text-yellow-600' size={30} />
								<span className='hidden md:block'>Home</span>
							</Link>
						</li>
						<li className='flex items-center gap-2 cursor-pointer'>
							<Link href='/menu' className='flex items-center gap-2'>
								<MdOutlineFoodBank className='text-yellow-600' size={30} />
								<span className='hidden md:block'>Category</span>
							</Link>
						</li>
						<li className='flex items-center gap-2'>
							<FaClipboardList className='text-yellow-600' size={25} />
							<span className='hidden md:block '>Order</span>
						</li>
						<form className='flex items-center justify-center'>
							<input
								type='text'
								placeholder='Search...'
								className={`${
									showSearchInput ? 'block' : 'hidden'
								} md:px-2 md:py-1 md:top-0 md:left-0 md:relative md:bg-slate-900 index-5 absolute top-25 px-2 py-3 bg-gray-300 w-[90%] left-0 right-0 mx-auto md:block rounded-full md:rounded-md md:w-50 outline-0 focus:ring-2 focus:ring-white`}
							/>
							<span
								onClick={() => setShowSearchInput(!showSearchInput)}
								className='cursor-pointer '
							>
								{' '}
								<FaSearch className='text-yellow-600' size={25} />{' '}
							</span>
						</form>
					</ul>
				</div>
				<div className='flex items-center'>
					{/* Log in or signup button */}

					{userIsLoggedIn ? (
						<div className='flex items-center gap-6 ml-4'>
							{/* user section and profile button */}
							{/* notification */}
							<div className=' relative'>
								<MdNotificationsNone className='text-yellow-600' size={30} />
								<span className='absolute top-0 text-xs -right-1 border-2 border-slate-900 bg-red-500 rounded-2xl text-white px-1 '>
									0
								</span>
							</div>

							{/* user image/profile menu button */}
							<button className=' w-8 h-8 rounded-circle  '>
								<FaUserCircle size={30} />
							</button>

							{/* Profile dropdown menu */}
							<div className=' absolute right-5 top-18 rounded-md shadow-lg text-slate-900 p-4 bg-gray-300 text-sm'>
								<ul className='decoration-0'>
									<li className=' hover:text-amber-600 cursor-pointer px-1'>
										<span></span>Profile
									</li>
									<li className=' hover:text-amber-600 cursor-pointer px-1'>
										<span></span>Orders
									</li>
									<li className=' hover:text-amber-600 cursor-pointer px-1'>
										<span></span>Logout
									</li>
								</ul>
							</div>
						</div>
					) : (
						<button className='border border-yellow-600 rounded-xl hover:bg-yellow-600  hover:text-slate-900 transition-colors text-white py-2 px-3  cursor-pointer'>
							<MdLogin size={25} className='md:hidden text-yeloow-600' />{' '}
							<span className='hidden md:block'>Login or Signup</span>
						</button>
					)}
				</div>
			</section>
		</>
	)
}

export default Navbar
