import { useState, useEffect } from 'react';
import { getOrder } from '../../api/order'
import { getProfile } from '../../api/auth'
import OrderPart from './order'
import SeatPart from './seat'
import RolePart from './role';
import PaymentMethods from './paymentMethod'
import PaymentDetails from './paymentDetail';
import AmountPayable from './amountPayable';
import useIsMobile from '../hook/useIsMobile'

export default function Payment() {
    const [mainData, setMainData] = useState(null);
    const [isOrderLoading, setIsOrderLoading] = useState(true);
    const [isProfileLoading, setIsProfileLoading] = useState(true);
    const [error, setError] = useState(null);
    const [profile, setProfile] = useState([]);
    let mobile = useIsMobile(1024)

    useEffect(() => {
        async function fetchOrderData() {
            setIsOrderLoading(true);
            try {
                const resp = await getOrder();
                setMainData(resp);
                setIsOrderLoading(false);
            } catch (error) {
                console.log(error);
                setError("Failed to load order data");
                setIsOrderLoading(false);
            }
        }

        fetchOrderData();
    }, []);

    useEffect(() => {
        async function fetchProfileData() {
            setIsProfileLoading(true);
            try {
                const profile = await getProfile();
                setProfile(profile?.gateways || []);
                setIsProfileLoading(false);
            } catch (error) {
                console.log(error);
                setError("Failed to load profile data");
                setIsProfileLoading(false);
            }
        }

        fetchProfileData();
    }, []);

    // Loading spinner component
    const LoadingSpinner = () => (
        <div className="flex justify-center items-center p-6">
            <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full animate-spin border-4 border-solid border-red-900 border-t-transparent"></div>
        </div>
    );

    // Error display component
    const ErrorMessage = ({ message }) => (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {message}</span>
        </div>
    );

    const isLoading = isOrderLoading || isProfileLoading;

    return (
        <div className="px-2 lg:px-64 py-8 xl:px-52 xs:py-2 max-lg:py-6">
            <p className="text-[22px] max-lg:hidden py-2 lg:flex">اطلاعات بلیت و پرداخت(۴ بلیت)</p>

            {error && <ErrorMessage message={error} />}

            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-1'>
                    <div className='lg:col-span-2'>
                        <OrderPart data={mainData} />
                        <SeatPart data={mainData} />
                        {!mobile ? <RolePart /> : <PaymentDetails mainData={mainData} />}
                    </div>
                    <div className='lg:col-span-1'>
                        <div className='lg:pr-4'>
                            <PaymentMethods mainData={profile} />
                            {mobile ? <RolePart /> : <PaymentDetails mainData={mainData} />}
                            <AmountPayable mainData={mainData} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}