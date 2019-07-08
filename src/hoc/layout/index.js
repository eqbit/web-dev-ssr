import css from './style.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Layout = props => (
  <>
    <div className={css.layout}>
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.main}>
        {props.children}
      </div>
      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  </>
);

export default Layout;