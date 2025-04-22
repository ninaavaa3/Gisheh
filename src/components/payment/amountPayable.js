
import { useState } from 'react';
import Image from 'next/image';


export default function AmountPayable(mainData) {
    console.log({ mainData })
    const transaction = mainData?.mainData?.transaction


    const [selectedGateway, setSelectedGateway] = useState(null);




    return (

        <div className="max-w-3xl mx-auto  lg:my-5 p-4  space-y-1 max-lg:bg-[white] max-lg:fixed max-lg:bottom-0 max-lg:w-full ">


            <div className="flex justify-between px-2 my-2">
                <p className="text-[12px] lg:text-[14px] font-bold text-[#0077DB] lg:text-[#B3261E]" >  {` ( ${transaction?.seatCount}صندلی ) `}</p>
                <p className="text-[12px] lg:text-[14px] font-bold ">{`${transaction?.seatPrice * transaction?.seatCount} ریال`}</p>

            </div>

            <button className='bg-[#B3261E] w-full rounded-3xl text-white text-[12px] p-2 ' >تایید و پرداخت </button>


        </div>
    );
}