import { useState } from 'react';
import { Tabs } from 'flowbite-react';
import Image from 'next/image';
import image1 from '../assets/images/pi1.jpg';
import image11 from '../assets/images/pi2.jpg';
import image2 from '../assets/images/product-5-1_365ca999-98d0-4949-b9bb-4ccf7ae65984.jpg';
import image3 from '../assets/images/l1.jpg';
import image4 from '../assets/images/product-1-3.jpg';
import image5 from '../assets/images/product-2-1 (1).jpg';
import image6 from '../assets/images/product-25-1.jpg';
import image7 from '../assets/images/c07.jpg';
import image8 from '../assets/images/o1.jpg';
import Link from 'next/link';

const TrendyProducts = () => {
    const [isShown, setIsShown] = useState(false);
  return (
    <div className="mt-[80px]">
        {/* <div className="container">
            <div className="grid grid-rows-2 grid-flow-col">
                <div className="grid grid-cols-1">
                    <h2 className="text-center text-[40px] text-gray-dark">Trendy Products</h2>
                </div>
                <div className="grid grid-cols-4 gap-16 xsm:gap-8 xsm:flex flex-col">
                        
                </div>
            </div>
        </div> */}
        <div className="container">
            <div className="grid grid-rows-1 grid-flow-col">
                <div className="grid grid-cols-1">
                    <h2 className="text-center text-[40px] text-gray-dark">Trendy Products</h2>
                </div>
               
            </div>
                    <Tabs.Group
                        // aria-label="Tabs with underline"
                        style="underline"
                        className='border-t-0 m-auto border-b-0 '
                        >
                        <Tabs.Item
                            active
                            title={<span className='text-[18px]'>Best Sellers</span>}
                        >
                            <div className="grid grid-rows-1 grid-flow-col">
                                <div className="grid grid-cols-4 md:grid-cols-2 gap-8 mt-8 xsm:flex flex-col">
                                    <div
                                     onMouseEnter={() => setIsShown(true)}
                                     onMouseLeave={() => setIsShown(false)}
                                    >
                                        <figure class="relative transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale-0">
                                        {!isShown && (
                                         <Link href="#">
                                            <Image 
                                            class="rounded-lg" 
                                            src={image1} 
                                            alt="image description" 
                                            style={{
                                                objectFit: 'cover', // cover, contain, none
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                            priority
                                            />
                                        </Link>
                                        )}
                                         {isShown && (
                                            <div className='w-full overflow-hidden touch-auto'>
                                                <Image 
                                                class="rounded-lg w-full h-auto hover:scale-110 transition duration-700 ease-in-out cursor-pointer object-cover" 
                                                src={image11} 
                                                alt="image description" 
                                                style={{
                                                    objectFit: 'cover', // cover, contain, none
                                                    width: '100%',
                                                    height: 'auto',
                                                }}
                                                priority
                                                />
                                            </div>
                                        )}
                                       
                                        <figcaption class="absolute w-[100%] px-4 text-lg text-white bottom-6">
                                            {
                                                isShown && (
                                                    <button className='bg-[#fff] pt-[16px] pb-[16px] w-[100%] hover:bg-orange-400 hover:text-[#fff] text-[#000] text-[22px]'>Add To Cart</button>
                                                )
                                            }
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure class="relative transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale-0">
                                        <Link href="#">
                                            <Image 
                                            class="rounded-lg" 
                                            src={image2} 
                                            alt="image description" 
                                            style={{
                                                objectFit: 'cover', // cover, contain, none
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                            priority
                                            />
                                        </Link>
                                        <figcaption class="absolute w-[100%] px-4 text-lg text-white bottom-6">
                                           <button className='bg-[#fff] pt-[16px] pb-[16px] w-[100%] hover:bg-orange-400 hover:text-[#fff] text-[#000] text-[22px]'>Add To Cart</button>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure class="relative transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale-0">
                                        <Link href="#">
                                            <Image 
                                            class="rounded-lg" 
                                            src={image3} 
                                            alt="image description" 
                                            style={{
                                                objectFit: 'cover', // cover, contain, none
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                            priority
                                            />
                                        </Link>
                                        <figcaption class="absolute w-[100%] px-4 text-lg text-white bottom-6">
                                           <button className='bg-[#fff] pt-[16px] pb-[16px] w-[100%] hover:bg-orange-400 hover:text-[#fff] text-[#000] text-[22px]'>Add To Cart</button>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure class="relative transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale-0">
                                        <Link href="#">
                                            <Image 
                                            class="rounded-lg" 
                                            src={image4} 
                                            alt="image description" 
                                            style={{
                                                objectFit: 'cover', // cover, contain, none
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                            priority
                                            />
                                        </Link>
                                        <figcaption class="absolute w-[100%] px-4 text-lg text-white bottom-6">
                                           <button className='bg-[#fff] pt-[16px] pb-[16px] w-[100%] hover:bg-orange-400 hover:text-[#fff] text-[#000] text-[22px]'>Add To Cart</button>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure class="relative transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale-0">
                                        <Link href="#">
                                            <Image 
                                            class="rounded-lg" 
                                            src={image5} 
                                            alt="image description" 
                                            style={{
                                                objectFit: 'cover', // cover, contain, none
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                            priority
                                            />
                                        </Link>
                                        <figcaption class="absolute w-[100%] px-4 text-lg text-white bottom-6">
                                           <button className='bg-[#fff] pt-[16px] pb-[16px] w-[100%] hover:bg-orange-400 hover:text-[#fff] text-[#000] text-[22px]'>Add To Cart</button>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure class="relative transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale-0">
                                        <Link href="#">
                                            <Image 
                                            class="rounded-lg" 
                                            src={image6} 
                                            alt="image description" 
                                            style={{
                                                objectFit: 'cover', // cover, contain, none
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                            priority
                                            />
                                        </Link>
                                        <figcaption class="absolute w-[100%] px-4 text-lg text-white bottom-6">
                                           <button className='bg-[#fff] pt-[16px] pb-[16px] w-[100%] hover:bg-orange-400 hover:text-[#fff] text-[#000] text-[22px]'>Add To Cart</button>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure class="relative transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale-0">
                                        <Link href="#">
                                            <Image 
                                            class="rounded-lg" 
                                            src={image7} 
                                            alt="image description" 
                                            style={{
                                                objectFit: 'cover', // cover, contain, none
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                            priority
                                            />
                                        </Link>
                                        <figcaption class="absolute w-[100%] px-4 text-lg text-white bottom-6">
                                           <button className='bg-[#fff] pt-[16px] pb-[16px] w-[100%] hover:bg-orange-400 hover:text-[#fff] text-[#000] text-[22px]'>Add To Cart</button>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div>
                                        <figure class="relative transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale-0">
                                        <Link href="#">
                                            <Image 
                                            class="rounded-lg" 
                                            src={image8} 
                                            alt="image description" 
                                            style={{
                                                objectFit: 'cover', // cover, contain, none
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                            priority
                                            />
                                        </Link>
                                        <figcaption class="absolute w-[100%] px-4 text-lg text-white bottom-6">
                                           <button className='bg-[#fff] pt-[16px] pb-[16px] w-[100%] hover:bg-orange-400 hover:text-[#fff] text-[#000] text-[22px]'>Add To Cart</button>
                                        </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            title={<span className='text-[18px]'>New Arrivals</span>}
                        >
                           <div className="grid grid-rows-2 grid-flow-col">
                                <div className="grid grid-cols-4">
                                
                                </div>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                             title={<span className='text-[18px]'>Sale Items</span>}
                        >
                           <div className="grid grid-rows-2 grid-flow-col">
                                <div className="grid grid-cols-4">
                                
                                </div>
                           </div>
                        </Tabs.Item>
                    </Tabs.Group>
        </div>
                   
    </div>

    
  )
}

export default TrendyProducts