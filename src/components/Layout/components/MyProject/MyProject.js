import classNames from 'classnames/bind';
import { ActiveIcon, CloseIcon, CompleteIcon } from '../Icons';
import styles from './MyProject.module.scss';
import MyProjectItem from './MyProjectItem';


const cx = classNames.bind(styles);

function MyProject({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <MyProjectItem  title={'Active'} to={'/active'} status={'12'} icon={<ActiveIcon />} id={'item-1'}/>
            <MyProjectItem  title={'Completed'} to={'/completed'} icon={<CompleteIcon />}/>
            <MyProjectItem  title={'Closed'} to={'/closed'} icon={<CloseIcon />}/>
        </div>
    );
}

export default MyProject;
