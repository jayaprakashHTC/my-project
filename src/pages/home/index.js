import BannerCarousel from '@/components/BannerCarousel'
import NewCollections from '@/components/NewCollections';
import React from 'react';
import {PiVan} from 'react-icons/pi';
import {MdOutlineSupportAgent} from 'react-icons/md';
import {TbTruckReturn} from 'react-icons/tb';
import {TfiGift} from 'react-icons/tfi';
import TrendyProducts from '@/components/TrendyProducts';
import EveryDayLook from '@/components/EveryDayLook';
import NewArrivals from '@/components/NewArrivals';
import LatestBlogs from '@/components/latestBlogs';
import DiscountOffer from '@/components/DiscountOffer';
import ImagesGallery from '@/components/ImagesGallery';

const HomeIndex = () => {
  return (
   <>
      <section>
         <BannerCarousel />
      </section>
     
      <section>
        <NewCollections />
      </section>
      <section>
         <div className='bg-[#f5f5f5] pt-[100px] pb-[100px]'>
            <div className='container'>
               <div className='grid grid-rows-1 grid-flow-col'>
                  <div className='grid grid-cols-4 gap-16 xsm:gap-8 xsm:flex flex-col md:grid-cols-2'>
                  <div>
                      <div className='flex justify-center items-center'>
                          <PiVan className='text-[60px]'/>
                      </div>
                      <div className='grid justify-center items-center text-center'>
                          <h3 className='text-[24px] text-gray-800 mt-4'>Free Shipping</h3>
                          <p className='text-gray-500 text-[20px]'>From all orders over $100</p> 
                      </div>
                  </div>
                  <div>
                      <div className='flex justify-center items-center'>
                          <MdOutlineSupportAgent className='flex text-[60px]'/>
                      </div>
                      <div className='grid justify-center items-center text-center'>
                          <h3 className='text-[24px] text-gray-800 mt-4'>Quality Support</h3>
                          <p className='text-gray-500 text-[20px]'>24/7 online feedback</p> 
                      </div>
                  </div>
                  <div>
                      <div className='flex justify-center items-center'>
                          <TbTruckReturn className='flex text-[60px]'/>
                      </div>
                      <div className='grid justify-center items-center text-center'>
                          <h3 className='text-[24px] text-gray-800 mt-4'>Return & Refund</h3>
                          <p className='text-gray-500 text-[20px]'>Return money within 30 days</p> 
                      </div>
                  </div>
                  <div>
                      <div className='flex justify-center items-center'>
                          <TfiGift className='flex text-[60px]'/>
                      </div>
                      <div className='grid justify-center items-center text-center'>
                          <h3 className='text-[24px] text-gray-800 mt-4'>Gift Voucher</h3>
                          <p className='text-gray-500 text-[20px]'>20% off when you shop online</p> 
                      </div>
                  </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section>
         <TrendyProducts />
      </section>
      <section>
        <EveryDayLook />
      </section>
      <section>
        <NewArrivals />
      </section>
      <section>
        <LatestBlogs />
      </section>
      <section>
        <DiscountOffer />
      </section>
      <section>
        <ImagesGallery />
      </section>
   </>
  )
}

export default HomeIndex