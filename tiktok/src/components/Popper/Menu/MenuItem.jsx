import Button from "../../Button"
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate
    })

    return (
        <div>
            <Button 
                className={classes}
                leftIcon={data.icon} 
                to={data.to}
                onClick={onClick}
            >
                {data.title}
            </Button>
        </div>
    );
}

export default MenuItem;