
import { useState } from 'react';
import Image from 'next/image';
import { getProfile } from '../../api/auth'
import { useEffect } from 'react';

export default function PaymentMethods(mainData) {


    const [selectedGateway, setSelectedGateway] = useState(null);




    return (

        <div className="max-w-3xl mx-auto p-4  bg-[white]  rounded-[6px] border-[1px] shadow-xs border-[#E0E0E0] ">
            <h2 className="text-[14px] lg:text-[16px] font-bold pb-3">روش پرداخت</h2>

            <div className="space-y-4">

                {mainData && mainData?.mainData?.map((option) => (
                    <div
                        key={option.id}
                        className={`transition-all duration-150 border rounded-[12px] px-3 py-3 flex items-center shadow-xs justify-between cursor-pointer ${selectedGateway === option.id ? 'border-[#B3261E]' : 'border-gray-200'}`}
                        onClick={() => setSelectedGateway(option.id)}
                    >
                        <div className="flex ">
                            <div className="w-12 h-12 ">
                                {option.image && (
                                    <Image
                                        src={option.image}
                                        alt={option.title}
                                        width={48}
                                        height={48}
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <div className="flex justify-end items-center">
                                <div className="px-2">
                                    <p className="text-[14px] lg:text-[16px] font-medium">پرداخت آنلاین</p>
                                    <p className="text-[12px] lg:text-[14px] text-gray-600">{option.title}</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedGateway === option.id ? 'border-[#B3261E]' : 'border-gray-300'}`}>
                                {selectedGateway === option.id && (
                                    <div className="w-3 h-3 bg-[#B3261E] rounded-full"></div>
                                )}
                            </div>

                            {/* Show wallet amount if it's a wallet payment option */}

                        </div>


                    </div>
                ))}
            </div>



        </div>
    );
}