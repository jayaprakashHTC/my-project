import VendorForms from "@/components/VendorForms";

const VendorIndex = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-rows-1 grid-flow-col">
            <div className="grid grid-cols-1 w-[50%] m-auto">
               <div>
                   <h2 className="text-center text-[38px]">Vendor Products Added</h2>
                   <VendorForms />
               </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default VendorIndex