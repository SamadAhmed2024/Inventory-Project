import React, {Fragment, lazy, Suspense} from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const VerifyOTP =lazy(() => import('../../components/Users/VerifyOTP'));
const VerifyOTPPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <VerifyOTP/>
            </Suspense>
        </Fragment>

    );
};
export default VerifyOTPPage;