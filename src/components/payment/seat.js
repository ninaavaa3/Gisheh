import useIsMobile from '../hook/useIsMobile'


export default function SeatPart(data) {
    let mobile = useIsMobile(1024)
    const seats = data?.data?.seats

    return (<>

        <div className='bg-[white]  rounded-[10px] border-[1px] shadow-xs border-[#E0E0E0] px-2 py-5 my-5'>
            <p className='text-[14px] lg:text-[16px] font-bold pb-3 lg:pb-10'> {!mobile ? "صندلی(های) شما" : "صندلی(های) انتخاب شده"} </p>
            <div className='flex flex-wrap'>
                {seats?.map((seat, index) => {

                    return (<div key={index} className='border m-1 text-[12px] lg:text-[14px] p-1 py-2 border-[#E6E1E5] rounded-[4px]'>
                        {`ردیف ${seat?.row} . صندلی ${seat?.number} . ${seat?.price} تومان`}</div>)
                })}

            </div>

        </div></>)
}