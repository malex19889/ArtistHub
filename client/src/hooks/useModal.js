import { useState } from "react";

const useModal = () => {
    //stores the curent view state of the modal
    const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    const toggle = (status) => {
        setShow(status);
    }

    //return so our component has access
    return {
        show,
        toggle
        // handleClose,
        // handleShow
    }
};

export default useModal;