import Image from "next/image"
import Link from "next/link";
import image1 from '../assets/images/o2.jpg';
import image2 from '../assets/images/h2.jpg';
import image3 from '../assets/images/men.jpg';
const NewArrivals = () => {
  return (
    <div className="mt-[80px]">
        <div className="container">
                    <h2 className="text-center text-[40px] text-gray-dark">New Arrivals</h2>
                    <p className="text-center text-[20px] text-gray-500">Preorder now to receive exclusive deals & gifts</p>
            <div className="grid grid-rows-1 grid-flow-col">
                <div className="grid grid-cols-3 md:grid-cols-2 gap-8 mt-8 xsm:flex flex-col">
                <div>
                                        <figure class="relative transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale-0">
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
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArrivals