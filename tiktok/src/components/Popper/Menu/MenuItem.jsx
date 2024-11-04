import Button from "../../Button"
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    return (
        <div>
            <Button 
                className={cx('menu-item')}
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