import { useState } from "react";

const useModalToggle = () => {
    const [show, setShow] = useState({});
    const modalToggle = (e) => {
        const handleClose = (e) => setShow(false);
        const handleOpen = (e) => setShow(true);
    }
    return { show, modalToggle };
}

export default useModalToggle;