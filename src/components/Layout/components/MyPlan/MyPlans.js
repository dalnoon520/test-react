import classNames from 'classnames/bind';
import { PercentIcon } from '../Icons';
import styles from './MyPlan.module.scss';
import MyPlanItem from './MyPlanItem';

const cx = classNames.bind(styles);

function MyPlan({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <MyPlanItem title={'Subscribe'} to={'/subscribe'} status={'Save 40%'} icon={<PercentIcon />}/>
        </div>
    );
}

export default MyPlan;
