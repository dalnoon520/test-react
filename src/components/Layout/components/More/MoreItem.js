import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './More.module.scss';

const cx = classNames.bind(styles);

function MoreItem({ icon, title, status, to }) {
    return (
        <div className={cx('myproject-item')}>
            <NavLink className={cx('menu-item')} to={to}>
                {icon}
                <span className={cx('title')}>{title}</span>
                <span className={cx('status')}>{status}</span>
            </NavLink>
        </div>
    );
}

export default MoreItem;
