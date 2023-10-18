import Image from "next/image"
import Link from "next/link";
import ct4 from '../assets/images/ct4.jpg';
import ct5 from '../assets/images/ct5.jpg';
import ct6 from '../assets/images/ct6.jpg';
const LatestBlogs = () => {
  return (
    <div className="mt-[80px]">
        <div className="container">
            <div className="grid grid-rows-1 grid-flow-col">
                <div className="grid grid-cols-1">
                    <h2 className="text-center text-[40px] text-gray-dark">Latest From Blog</h2>
                    <p className="text-center text-[20px] text-gray-500">Subscribe for latest news and blog updates from our editor.</p>
                </div> 
            </div>
            <div className="grid grid-rows-1 grid-flow-col">
                <div className="grid grid-cols-3 md:grid-cols-2 gap-8 mt-8 xsm:flex flex-col">
                <div>
                                            <Image 
                                            class="rounded-lg" 
                                            src={ct4} 
                                            alt="image description" 
                                            style={{
                                                objectFit: 'cover', // cover, contain, none
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                            priority
                                            />
                                    </div>
                                    <div>
                                    <Image 
                                            class="rounded-lg" 
                                            src={ct5} 
                                            alt="image description" 
                                            style={{
                                                objectFit: 'cover', // cover, contain, none
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                            priority
                                            />
                                    </div>
                                    <div>
                                    <Image 
                                            class="rounded-lg" 
                                            src={ct6} 
                                            alt="image description" 
                                            style={{
                                                objectFit: 'cover', // cover, contain, none
                                                width: '100%',
                                                height: 'auto',
                                            }}
                                            priority
                                            />
                                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestBlogs