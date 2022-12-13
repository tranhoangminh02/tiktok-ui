import Header from '~/components/Layout/components/Header';
import SideBar from './SideBar';
import style from './DefaultLayout.module.scss';
import className from 'classnames/bind';

const cx = className.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
