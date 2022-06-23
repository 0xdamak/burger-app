import { v4 as uuidv4 } from "uuid";
import { motion, AnimatePresence } from "framer-motion";
import { CancelIcon } from "../../../assets/svg/icons";
import Backdrop from "../Backdrop";
import Styles from "./Modal.module.scss";

function Modal({ onClick, children }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Backdrop key={uuidv4()} onClick={onClick} />
      <motion.div
        key={uuidv4()}
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 1, x: "-50%", y: "-50%", scale: 0 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
        className={Styles.Wrapper}
      >
        <CancelIcon onClick={onClick} />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
