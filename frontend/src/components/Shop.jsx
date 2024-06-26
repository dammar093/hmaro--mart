import React from 'react'
import DropDown from './DropDown';
import Card from './Card';
import Pagination from './Pagination';


const Shop = () => {
  return (
    <section className='w-full bg-white p-2 mb-[70px]'>
      <div className='w-full flex justify-between my-8'>
        <div>
          <h2 className='text-gray-600 font-medium text-2xl '>Products</h2>
        </div>
        <div>
          <DropDown />
        </div>
      </div>
      <div className='grid  grid-cols-2  md:grid-cols-5  xl:grid-cols-6 gap-2'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </section>
  )
}

export default Shop