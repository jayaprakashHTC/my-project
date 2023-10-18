import Image from 'next/image';
import i1 from '../assets/images/i1.jpg';
import i2 from '../assets/images/i2.jpg';
import i3 from '../assets/images/i3.jpg';
import i4 from '../assets/images/i4.jpg';
import i5 from '../assets/images/i5.jpg';
import i6 from '../assets/images/i6 (2).jpg';

const ImagesGallery = () => {
  return (
    <div className='mt-[80px]'>
       <div className='grid grid-rows-1 grid-flow-col'>
        <div className='grid grid-cols-6 md:grid-cols-2 mt-8 xsm:flex flex-col'>
            <div>
            <Image src={i1} alt='images not display!!' />
            </div>
            <div>
            <Image src={i2} alt='images not display!!' />
            </div>
            <div>
            <Image src={i3} alt='images not display!!' />
            </div>
            <div>
            <Image src={i4} alt='images not display!!' />
            </div>
            <div>
            <Image src={i5} alt='images not display!!' />
            </div>
            <div>
            <Image src={i6} alt='images not display!!' />
            </div>
        </div>
       </div>
    </div>
  )
}

export default ImagesGallery