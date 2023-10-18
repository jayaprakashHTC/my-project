import QuestionPaper from '@/components/QuestionPaper'
import React from 'react'

const index = () => {
  return (
    <>
       <div className="container">
        <div className="grid grid-rows-1 grid-flow-col">
            <div className="grid grid-cols-1 w-[50%] m-auto">
               <div>
                  <h2 className='text-center text-red-800 text-[40px]'>Question Paper</h2>
                  <QuestionPaper />
               </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default index