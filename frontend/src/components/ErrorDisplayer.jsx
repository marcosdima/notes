import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import ErrorDisplayerStyle from '../styles/components/ErrorDisplayer.style';
import { PopOnHover } from '../styles/animations';
import { popError } from '../store/error-reducer';

const ErrorDisplayer = () => {
    const [error] = useSelector((state) => state.errors);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (error) {
            setShow(true);
            setTimeout(() => {
                dispatch(popError());
            }, 10000);
        }
    }, [dispatch, error]);

    if (!error) return <></>;

    return (
        <PopOnHover>
            <ErrorDisplayerStyle className={show ? 'slide-down' : ''}>
                {error}
            </ErrorDisplayerStyle>
        </PopOnHover>
    );
};

export default ErrorDisplayer;
