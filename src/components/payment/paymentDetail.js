




export default function PaymentDetails(mainData) {

    const transaction = mainData?.mainData?.transaction







    return (

        <div className="max-w-3xl mx-auto my-5 p-4  space-y-1 bg-[white]  rounded-[6px] border-[1px] shadow-xs border-[#E0E0E0] ">
            <h2 className="text-[14px] lg:text-[16px] font-bold pb-3 ">جزییات پرداخت</h2>

            <div className="flex justify-between px-2 py-2">
                <p className="text-[12px] lg:text-[14px] font-bold " >  {`بلیط ${transaction?.seatCount} عدد`}</p>
                <p className="text-[12px] lg:text-[14px] font-bold ">{`${transaction?.seatPrice * transaction?.seatCount} ریال`}</p>

            </div>
            <div className="flex justify-between px-2">
                <p className="text-[12px] lg:text-[14px] font-bold " > کارمزد خرید آنلاین</p>
                <p className="text-[12px] lg:text-[14px] font-bold ">{`${transaction?.purchaseFee} ریال`}</p>

            </div>

            <div className="flex justify-between px-2 py-2">
                <p className="text-[12px] lg:text-[14px] font-bold " >  تخفیف</p>
                <p className="text-[12px] lg:text-[14px] font-bold ">{`${transaction?.discount} ریال`}</p>

            </div>
            <div className="flex justify-between px-2 border-t-2 border-[#DED8E1] pt-2 mt-2">
                <p className="text-[12px] lg:text-[14px] font-bold " >  مجموع</p>
                <p className="text-[12px] lg:text-[14px] font-bold ">{`${transaction?.totalPrice} ریال`}</p>

            </div>



        </div>
    );
}