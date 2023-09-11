import Image from "next/image";
import image1 from '../assets/images/h1-banner01.jpg';
import image2 from '../assets/images/h1-banner02.jpg';
import image3 from '../assets/images/h1-banner03.jpg';
import Link from "next/link";


const NewCollections = () => {
  return (
    <div className="bg-[url('https://ap-lotita.myshopify.com/cdn/shop/files/h1-bg01.png?v=1660116182')] bg-[#fff] pt-[100px] pb-[100px] bg-no-repeat bg-right-top bg-auto">
       <div className="container">
           <div className="grid grid-rows-1 grid-flow-col gap-4">
              <div className="grid grid-cols-2 gap-16 xsm:gap-8 xsm:flex flex-col">
                <div>
                    <p className="text-gray-400 text-[18px]">SPRING 2022</p>
                    <h2 className="text-[45px] xsm:text-[34px] mb-[20px] leading-[3rem] mt-[20px]">New Collection <br/> Ready to Wear</h2>
                   <div className='w-full overflow-hidden touch-auto'>
                   <Image 
                    src={image1} 
                    alt="New collection image not display" 
                    className="w-full h-auto hover:scale-110 transition duration-700 ease-in-out cursor-pointer object-cover"
                    // fill
                    // style={{
                    //     objectFit: 'cover', // cover, contain, none
                    //     width: '100%',
                    //     height: 'auto',
                    // }}
                    priority
                    />
                   </div>
                   <div className='w-full overflow-hidden touch-auto mt-[30px]'>
                    <Image 
                    src={image3} 
                    alt="New collection image not display" 
                    className="float-right w-[80%] xsm:w-[100%] h-auto hover:scale-110 transition duration-700 ease-in-out cursor-pointer object-cover"
                    // className="mt-[30px] float-right object-cover w-[80%] h-auto xsm:w-[100%] hover:scale-110 transition duration-100 cursor-pointer"
                    priority
                    />
                    </div>
                </div>
                <div>
                <div className='w-full overflow-hidden touch-auto'>
                   <Image 
                    src={image2} 
                    alt="New collection image not display" 
                    className="w-full h-auto hover:scale-110 transition duration-700 ease-in-out cursor-pointer object-cover"
                    // style={{
                    //     objectFit: 'cover', // cover, contain, none
                    //     width: '100%',
                    //     height: 'auto',
                    // }}
                    priority
                    />
                </div>
                    <Image 
                    src="https://cdn.shopify.com/s/files/1/1430/7398/files/f1.png?v=1668584485" 
                    alt="New collection image not display" 
                    width={200}
                    height={200}
                    className="object-cover w-[60%] h-auto m-auto mt-[130px] xsm:mt-[20px]"
                    // priority
                    />
                    <p className="text-center text-[20px] text-gray-600 mt-6">Discover more about our products.</p>
                    <div className="text-center mt-[20px]">
                        <Link href="#" className="text-gray-800 text-[20px] mt-[20px] underline"> Explore now</Link>
                    </div>
                </div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default NewCollections