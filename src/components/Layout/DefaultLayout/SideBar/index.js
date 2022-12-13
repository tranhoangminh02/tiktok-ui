import style from './SideBar.module.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

function SideBar() {
    return <aside className={cx('wrapper')}>
        <h2>SildeBar</h2>
    </aside>;
}

export default SideBar;
