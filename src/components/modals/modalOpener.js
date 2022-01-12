import React, {useCallback, useState} from 'react';
import RecomendModal from './recomendModal';

const ModalOpener = () => {

    const [closeDev,changeCloseDev] = useState(true);

    const changeCloseDevHandler = useCallback((value) => {
        changeCloseDev(value)
    },[]);

    if (closeDev && !localStorage.getItem('Bar')) {
        return (
            <RecomendModal modalCloseHandler={changeCloseDevHandler}/>
        )
    } else return null;
};

export default ModalOpener;