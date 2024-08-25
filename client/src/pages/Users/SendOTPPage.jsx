import React, {Fragment, lazy, Suspense} from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const SendOTP =lazy(() => import('../../components/Users/SendOTP'));
const SendOTPPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <SendOTP/>
            </Suspense>
        </Fragment>

    );
};

export default SendOTPPage;