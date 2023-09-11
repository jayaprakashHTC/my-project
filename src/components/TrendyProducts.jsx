import { Tabs } from 'flowbite-react';
const TrendyProducts = () => {
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
                    <Tabs.Group
                        // aria-label="Tabs with underline"
                        // style="underline"
                        className='border-t-0'
                        >
                        <Tabs.Item
                            active
                            title="Profile"
                            className='text-center'
                        >
                            <p>
                            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                            control the content visibility and styling.
                            </p>
                        </Tabs.Item>
                        <Tabs.Item
                            title="Profile2"
                        >
                            <p>
                            jayaprakjash
                            </p>
                        </Tabs.Item>
                        <Tabs.Item
                            title="Profile3"
                        >
                            <p>
                            jayaprakjash xmnb cnlnckcskxm
                            </p>
                        </Tabs.Item>
                        <Tabs.Item
                            title="Profile4"
                        >
                            <p>
                            jayaprakjashjhgdjfgf hjdgyfegf jhgyuegfuewgfwegf
                            </p>
                        </Tabs.Item>
                    </Tabs.Group>
    </div>

    
  )
}

export default TrendyProducts