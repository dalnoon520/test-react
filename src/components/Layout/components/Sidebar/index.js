import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import MenuItem from './Menu/MenuItem';
import Menu from './Menu';
import HomeIcon2, { DatalogIcon, HomeIcon } from '../Icons/Icons';
import MyProject from '../MyProject/MyProject';
import More from '../More/More';
import MyPlan from '../MyPlan/MyPlans';

const cx = classNames.bind(styles)
function Sidebar() {
    return ( 
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title ={"Home"} to='/' icon={<HomeIcon2 />}/>
                <MenuItem title ={"Task Catalog"} to='/task-catalog' icon={<DatalogIcon />} status={46}/>
            </Menu>

            <MyProject label={'MY PROJECTS'} />
            <MyPlan label={'MY PLANS'} />
            <More label={'More'} />
        </aside>
     );
}

export default Sidebar;