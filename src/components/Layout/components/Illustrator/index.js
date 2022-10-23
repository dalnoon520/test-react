import classNames from 'classnames/bind';
import styles from './Illustrator.scss';
import { Button } from '@shopify/polaris';
import RecentTask from './RecentTask';

const cx = classNames.bind(styles);

function Illustrator({ src, size, btnFTitle, btnSTitle, id }) {
    return (
        <div className={cx('home-page')}>
            <div className={cx('section-illustrator')}>
                <img src={src} alt="" className={cx('illustration-img')} />
                <div className={cx('btn-group')}>
                    <Button size={size}>{btnFTitle}</Button>
                    <Button primary size={size} id={id}>
                        {btnSTitle}
                    </Button>
                </div>
            </div>

            <div className={cx('recent-task')}>
                <h3 className={cx('data-heading')}>Recent Tasks</h3>
                <RecentTask />
            </div>
        </div>
    );
}

export default Illustrator;
