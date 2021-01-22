import {useState} from "react";

const useModal = () => {
    //stores the curent view state of the modal
    const [isShown, setIsShown] = useState(false);

    //changes the value of isShown to its opposite
    function toggle() {
        setIsShown(!isShown);
    }

    //return so our component has access
    return {
        isShown,
        toggle
    }
};

export default useModal;