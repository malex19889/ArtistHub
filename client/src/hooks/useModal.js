import { useState } from "react";

const useModal = () => {
    const [show, setShow] = useState(false);

    const toggle = (status) => {
        setShow(status);
    }

    //return so our component has access
    return {
        show,
        toggle
    }
};

export default useModal;