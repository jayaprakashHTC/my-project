import Image from "next/image";
import { Carousel } from 'flowbite-react';
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
const BannerCarousel = () => {
  return (
   <>
    <Carousel 
    slideInterval={5000}
    className="border-none relative rounded-lg"
    >
        <div className="relative">
            <Image
                alt="..."
                src={banner1}
                className="border-none rounded-none"
            />
            <div className="container grid grid-rows grid-flow-col">
                <p className="text-[#fff] text-[18px] absolute top-[35%] left-[10%]">SAVE 50% OFF</p>
            </div>
        </div>
        <div>
            <Image
                alt="..."
                src={banner2}
                className="border-none rounded-none"
            />
        </div>
    </Carousel>
   </>
  )
}

export default BannerCarousel