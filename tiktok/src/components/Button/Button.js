import clsx from "clsx";
import styles from './Button.module.css'

function Button({ primary, danger }) {
    const classes = clsx(styles.myButton, {
        'd-flex': false,
        [styles.primary]: primary,
        [styles.danger]: danger,
    })

    return (
        <button className={classes}>
            Click!
        </button>
    )
}

export default Button;