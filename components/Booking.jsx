import React from 'react'

function Booking() {
  return (
    <section id='bookings' className='py-12 px-12 bg-slate-900 text-white rounded-bl-4xl rounded-tr-4xl'>
    <h1 className='text-2xl font-bold mb-4 text-center '>Booking A Table</h1>
        <form>
            <div className='mb-4'>
                <label htmlFor='name' className='hidden text-sm font-medium text-white'>
                    Name
                </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Name'
                    className='mt-1 block w-full border border-amber-600  shadow-sm p-4 hover:ring-0 outline-0'
                    required
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='email' className='hidden text-sm font-medium text-white'>
                    Email
                </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    className='mt-1 block w-full border border-amber-600  shadow-sm p-4 hover:ring-0 outline-0'
                    required
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='phone' className='hidden text-sm font-medium text-white'>
                    Phone
                </label>
                <input
                    type='tel'
                    id='phone'
                    name='phone'
                    placeholder='Phone'
                    className='mt-1 block w-full border border-amber-600 shadow-sm p-4 hover:ring-0 outline-0'
                    required
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='date' className='hidden text-sm font-medium text-white'>
                    Date
                </label>
                <input
                    type='date'
                    id='date'
                    name='date'
                    placeholder='Date'
                    className='mt-1 block w-full border border-amber-600 shadow-sm p-4 hover:ring-0 outline-0'
                    required
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='time' className='hidden text-sm font-medium text-white'>
                    Time
                </label>
                <input
                    type='time'
                    id='time'
                    name='time'
                    className='mt-1 block w-full border border-amber-600 shadow-sm p-4 hover:ring-0 outline-0'
                    required
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='guests' className='hidden text-sm font-medium text-white'>
                    Number of Guests
                </label>
                <input
                    type='number'
                    id='guests'
                    name='guests'
                    className='mt-1 block w-full border border-amber-600 shadow-sm p-4 hover:ring-0 outline-0'
                    required
                />
            </div>
            <button type='submit' className='mt-4 w-full bg-amber-600 text-xl text-white font-bold py-4 px-4 hover:bg-amber-500 shadow'>
                Book Table
            </button>
        </form>
    </section>
  )
}

export default Booking