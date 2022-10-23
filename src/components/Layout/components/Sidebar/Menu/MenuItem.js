import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, status }) {
    return (
        <>
            <div>
                <NavLink className={cx('menu-item')} to={to}>
                    {icon}
                    <span className={cx('title')}>{title}</span>
                    <div><span className={cx('status')}>{status}</span></div>
                </NavLink>
            </div>
        </>
    );
}

export default MenuItem;
