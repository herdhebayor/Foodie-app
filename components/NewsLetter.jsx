import React from 'react'

function NewsLetter() {
  return (
		<section className='py-6 px-4 bg-slate-900 my-6 block'>
			<h2 className='text-2xl font-bold text-white'>
				Subscribe to our Newsletter
			</h2>
			<p className='text-white'>
				Stay updated with the latest news and exclusive offers from Foodie.
			</p>
			<form className='mt-4 border flex justify-between border-amber-600 w-full'>
				<input
					type='email'
					name='email'
					placeholder='Enter your email'
					className='p-4 rounded-md text-white  outline-0'
					required
				/>
				<button
					type='submit'
					className='ml-2 p-4 bg-amber-600 text-white '
				>
					Subscribe
				</button>
			</form>
		</section>
	)
}

export default NewsLetter