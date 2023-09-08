import Link from 'next/link'
const HeaderCom = () => {
  return (
    <>
       <header className='bg-[#fff] sticky z-[999] top-0'>
           <nav className="container grid grid-rows grid-flow-col gap-4">
              <div className="col-span-1 pt-[12px] pb-[12px]">
                <Link href='/home'>
                   <p className="text-[28px] font-sans text-red-500">Jera chudu</p>
                   <p className="text-[28px] mt-[-10px] ml-[45px] font-sans font-bold text-black">Ey</p>
                </Link>
              </div>
              <div className="col-span-11">
                  <ul className="pt-[35px] pb-[35px]">
                    <li className='inline-block mr-[12px] text-[20px]'><Link href="/home">Home</Link></li>
                    <li className='inline-block mr-[12px] text-[20px]'><Link href="/about">About</Link></li>
                    <li className='inline-block text-[20px]'><Link href="/contact">Contact</Link></li>
                  </ul>
              </div>
           </nav>
       </header>
    </>
  )
}

export default HeaderCom