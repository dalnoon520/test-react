import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './MyPlan.module.scss';

const cx = classNames.bind(styles);

function MyPlanItem({ icon, title, status, to }) {
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

export default MyPlanItem;
