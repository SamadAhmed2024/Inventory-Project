import React, {Fragment, lazy, Suspense} from 'react';
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const CreatePassword =lazy(() => import('../../components/Users/CreatePassword'));
const CreatePasswordPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <CreatePassword/>
            </Suspense>
        </Fragment>

    );
};
export default CreatePasswordPage;