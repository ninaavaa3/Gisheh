import Image from 'next/image';


export default function OrderPart(data) {
    console.log({ data })
    const order = data?.data?.order
    const event = data?.data?.event
    return (<> <div className='bg-[white]  rounded-[10px] border-[1px] shadow-xs border-[#E0E0E0] p-2 lg:py-4 lg:px-6 grid grid-cols-3 max-xl:gap-1 '>

        <Image
            width={104} height={157}
            style={{ borderRadius: "4px" }}
            src={event?.thumbnail
            } alt="" />
        <div className='xl:-mr-14 2xl:-mr-24  col-span-2 grid grid-cols-1 pb-9 '>
            <p className='text-[12px] lg:text-[14px] font-bold'>{event?.title}</p>
            <p className='text-[12px] lg:text-[14px] font-bold'>{order?.cinemaName}</p>
            <p className='text-[12px] lg:text-[14px] font-bold'>{order?.salon}</p>
            <p className='text-[12px] lg:text-[14px] font-bold'>{`${order?.day} ${order?.date} ساعت${order?.start}`}</p>
        </div>

    </div></>)
}