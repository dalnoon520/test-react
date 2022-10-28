import { TopBar, ActionList, Icon, VisuallyHidden, Frame, Button } from '@shopify/polaris';
import { ArrowLeftMinor, NotificationMajor, CirclePlusOutlineMinor } from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header() {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const toggleIsUserMenuOpen = useCallback(() => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen), []);

    const toggleIsSecondaryMenuOpen = useCallback(
        () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
        [],
    );

    const handleSearchResultsDismiss = useCallback(() => {
        setIsSearchActive(false);
        setSearchValue('');
    }, []);

    const handleNavigationToggle = useCallback(() => {
        console.log('toggle navigation visibility');
    }, []);

    const logo = {
        width: 124,
        topBarSource:
            'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
        url: 'http://jadedpixel.com',
        accessibilityLabel: 'Jaded Pixel',
    };

    const userMenuMarkup = (
        <TopBar.UserMenu
            actions={[
                {
                    items: [{ content: 'Back to Shopify', icon: ArrowLeftMinor }],
                },
                {
                    items: [{ content: 'Community forums' }],
                },
            ]}
            name="Nguyen Dinh Chi"
            detail="Subscribe now!"
            initials="D"
            open={isUserMenuOpen}
            onToggle={toggleIsUserMenuOpen}
        />
    );

    const secondaryMenuMarkup = (
        <div className={cx('header-item')}>
            <div className={cx('credit')}>
                <div className={cx('credit-label')}>Available credits: 4</div>
                <Icon source={CirclePlusOutlineMinor} color="base" />
            </div>
            <Button>Submit a new task</Button>
            <TopBar.Menu
                activatorContent={
                    <span>
                        <Icon source={NotificationMajor} color="base" />
                        <VisuallyHidden>Secondary menu</VisuallyHidden>
                    </span>
                }
                open={isSecondaryMenuOpen}
                onOpen={toggleIsSecondaryMenuOpen}
                onClose={toggleIsSecondaryMenuOpen}
                actions={[
                    {
                        items: [{ content: 'Community forums' }],
                    },
                ]}
            />
        </div>
    );

    const newTask = <TopBar.secondaryMenu newTaskButton={<Button>Submit a new task</Button>} />;

    const topBarMarkup = (
        <TopBar
            showNavigationToggle
            userMenu={userMenuMarkup}
            secondaryMenu={secondaryMenuMarkup}
            onSearchResultsDismiss={handleSearchResultsDismiss}
            onNavigationToggle={handleNavigationToggle}
            newTask={newTask}
        />
    );

    return (
        <div>
            <Frame topBar={topBarMarkup} logo={logo} />
        </div>
    );
}

export default Header;
