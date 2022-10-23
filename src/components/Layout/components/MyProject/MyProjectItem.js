import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './MyProject.module.scss';

const cx = classNames.bind(styles);

function MyProjectItem({ icon, title, status, to, id }) {
    return (
        <div className={cx('myproject-item')}>
            <NavLink className={cx('menu-item')} to={to}>
                {icon}
                <span className={cx('title')}>{title}</span>
                <div><span className={cx('status')} id={id}>{status}</span></div>
            </NavLink>
        </div>
    );
}

export default MyProjectItem;
