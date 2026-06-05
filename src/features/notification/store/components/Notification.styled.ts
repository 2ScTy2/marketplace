import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";


export const NotificationWrapper = styled(motion.div)`
            position: fixed;
            top: 70px;
            left: 45%;
            z-index: 200;
            background-color: rgba(48, 44, 44, 0.4);
            padding: 10px;
            display: flex;
`

export const CloseButton = styled(motion.button)`
    margin-left: 20px;
    display: flex;
    align-items: center;
`
export const CloseIcon = styled(IoMdClose)`
`