import classes from './Modal.module.css'
const Modal = ({children,submitFunc}) => {

  return (
    <>
    <div className={classes.backdrop} />
    <dialog className={classes.modal}  open>{children}</dialog>
    </>
  )
}

export default Modal