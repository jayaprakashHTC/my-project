import Image from "next/image"
import { Carousel } from 'flowbite-react';
import image1 from '../assets/images/h1-b5.png';
import image2 from '../assets/images/h1-b4.png';
import banner1 from '../assets/images/pi1.jpg';
import banner2 from '../assets/images/pi2.jpg';
const EveryDayLook = () => {
  return (
    <>
        <div className="grid grid-rows-2 grid-flow-col mt-[80px]">
           <div className="grid grid-cols-2 xsm:flex flex-col">
              <div className="bg-[#fffaf2] pt-[7rem] pr-[7rem] pb-[2rem] pl-[2rem] xsm:p-5">
               <div className="bg-[url('../assets/images/h1-bg02.png')]">
                   <div>
                      <Image src={image2} alt="image.." className="w-[100%]"/>
                   </div>
               </div>
              </div>
              <div className="w-auto xsm:w-[80%] m-auto mt-[120px] xsm:mt-[20px]">
                   <p className="text-center text-[20px] xsm:text-[16px] text-gray-500">HOT DEALS</p>
                   <h2 className="text-[50px] xsm:text-[30px] text-center text-gray-900">Every Day <br/>Look</h2>
                   <Carousel 
                    slideInterval={5000}
                    className="border-none relative rounded-lg h-auto carousel-button"
                    leftControl=""
                    rightControl=""
                    >
                        <div className="relative mb-5">
                            <Image
                                alt="..."
                                src={banner1}
                                className="border-none rounded-none w-auto mt-[20px]"
                            />
                            {/* <div className="container grid grid-rows grid-flow-col">
                                <p className="text-[#fff] text-[18px] absolute top-[35%] left-[10%]">SAVE 50% OFF</p>
                            </div> */}
                            <p>ahgfcajjs</p>
                            <p>nbcvcjhvdjh</p>
                            <p>nbcvhgcv</p>
                            <p>absvcshgcxvasxcv</p>
                        </div>
                        <div>
                            <Image
                                alt="..."
                                src={banner2}
                                className="border-none rounded-none w-auto mt-[20px]"
                            />
                            <p>ahgfcajjs</p>
                            <p>nbcvcjhvdjh</p>
                        </div>
                    </Carousel>
              </div>
           </div>
           <div className="grid grid-cols-2 xsm:flex flex-col">
           <div className="w-auto xsm:w-[80%] m-auto mt-[120px] xsm:mt-[20px]">
                   <p className="text-center text-[20px] xsm:text-[16px] text-gray-500">MEN`S ITEMS</p>
                   <h2 className="text-[50px] xsm:text-[30px] text-center text-gray-900">Every Day <br/>Look</h2>
                   <Carousel 
                    slideInterval={5000}
                    className="border-none relative rounded-lg h-auto carousel-button"
                    leftControl=""
                    rightControl=""
                    >
                        <div className="relative mb-5">
                            <Image
                                alt="..."
                                src={banner1}
                                className="border-none rounded-none w-auto mt-[20px]"
                            />
                            {/* <div className="container grid grid-rows grid-flow-col">
                                <p className="text-[#fff] text-[18px] absolute top-[35%] left-[10%]">SAVE 50% OFF</p>
                                <p>ahgfcajjs</p>
                            </div> */}
                            <p>ahgfcajjs</p>
                            <p>nbcvcjhvdjh</p>
                            <p>dmcvwajfgwd</p>
                            <p>ndcvjfgEUFDYQ</p>
                        </div>
                        <div>
                            <Image
                                alt="..."
                                src={banner2}
                                className="border-none rounded-none w-auto mt-[20px]"
                            />
                             <p>ahgfcajjs</p>
                              <p>nbcvcjhvdjh</p>
                        </div>
                    </Carousel>
              </div>
              <div className="bg-[#fef1f0] pt-[7rem] pr-[6rem] pb-[2rem] pl-[6rem] xsm:p-5">
               <div className="bg-[url('../assets/images/h1-bg03.png')]">
                   <div>
                      <Image src={image1} alt="image.." className="w-[100%]"/>
                   </div>
               </div>
              </div>
           </div>
        </div>
    </>
  )
}

export default EveryDayLook