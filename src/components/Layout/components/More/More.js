import classNames from 'classnames/bind';
import { ContactIcon, FqaIcon, GiftIcon, InviteIcon } from '../Icons';
import styles from './More.module.scss';
import MoreItem from './MoreItem';


const cx = classNames.bind(styles);

function More({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <MoreItem  title={'Member Sperks'} to={'/member-sperks'} icon={<GiftIcon />}/>
            <MoreItem  title={'Invite Friends'} to={'/invite-friends'} status={'Earn $10'} icon={<InviteIcon />}/>
            <MoreItem  title={'Contact'} to={'/contact'} status={null} icon={<ContactIcon />}/>
            <MoreItem  title={'FQA'} to={'/fqa'} status={null} icon={<FqaIcon />}/>
        </div>
    );
}

export default More;