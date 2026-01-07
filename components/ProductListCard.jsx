import React from 'react'


function ListCard ({product}){


    return (
			<>
				<section className='py-6 px-3 block border  border-b-gray-600 '>
					<div className='flex h-50'>
						<img
							className='w-50 h-full rounded-md'
							src={product.image}
							alt={product.name}
						/>
						<div className='flex w-full h-full justify-between '>
							<div>
								<h3 className='text-2xl font-semibold'>{product.name}</h3>
								<p>{product.description}</p>
							</div>
							<div className='flex flex-col justify-between'>
								<h3 className='text-2xl font-semibold'>#{product.price}</h3>
								<button>add to cart</button>
							</div>
						</div>
					</div>
				</section>
			</>
		)
}