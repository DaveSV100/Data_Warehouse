import { useState } from "react";

const useModal = (initValue) => {
    const[modal, setModal] = useState(initValue);

    const setStatus = () => setModal(true);

    return [modal, setModal, setStatus];
}

export default useModal;