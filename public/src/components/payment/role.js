import Image from 'next/image';


export default function RolePart(data) {
    console.log({ data })
    const order = data?.data?.order
    const event = data?.data?.event
    return (<>

        <div className='bg-[white] max-lg:mt-5 max-lg:mb-[100px] rounded-[10px] border-[1px] shadow-xs border-[#E0E0E0] px-4 py-2 lg:py-4  '>

            <p className='text-[14px] lg:text-[16px] font-bold pb-6'>قوانین خرید بلیت</p>
            <ul className='space-y-1  px-6' >
                <li className='list-disc text-[12px] lg:text-[14px]'>تا ۲ ساعت قبل از شروع سانس و در صورتی که بلیت را در محل سینما چاپ نکرده باشید، می‌توانید بلیت خود را بدون کسر وجه لغو کنید. مبلغ آن به حساب کاربری شما در سینماتیکت واریز خواهد شد.</li>
                <li className='list-disc text-[12px] lg:text-[14px]'>فیلم در صورتی اکران میشود که حداقل ۵ بلیت فروش رفته باشد.</li>

                <li className='list-disc text-[12px] lg:text-[14px]'>برای دریافت بلیت خود ۱۵ دقیقه قبل از شروع سانس به گیشه یا کیوسک های سینماتیکت مراجعه فرمایید.</li>

                <li className='list-disc text-[12px] lg:text-[14px]'>کاربر موظف است اطلاعات شخصی واقعی و صحیح خود را در سایت وارد نماید. سایت سینماتیکت مسئولیتی در قبال هرگونه مشکل احتمالی که در اثر ارائه اطلاعات غلط از طرف کاربر به این سایت، ایجاد شده است، ندارد.</li>

            </ul>

        </div>

    </>)
}