import Active from '~/pages/Active';
import Closed from '~/pages/Closed';
import Completed from '~/pages/Completed';
import Contact from '~/pages/Contact';
import Fqa from '~/pages/Fqa';
import Home from '~/pages/Home';
import InviteFriends from '~/pages/InviteFriends';
import MemberSperks from '~/pages/MemberSperks';
import Subscribe from '~/pages/Subscribe';
import TaskCatalog from '~/pages/TaskCatalog';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/task-catalog', component: TaskCatalog },
    { path: '/active', component: Active },
    { path: '/completed', component: Completed },
    { path: '/closed', component: Closed },
    { path: '/subscribe', component: Subscribe },
    { path: '/member-sperks', component: MemberSperks },
    { path: '/invite-friends', component: InviteFriends },
    { path: '/contact', component: Contact },
    { path: '/fqa', component: Fqa },
];

export const privateRoutes = [];
