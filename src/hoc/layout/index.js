import css from './style.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import {VkVidget} from '../../components/vk-vidget';

const Layout = props => (
  <>
    <div className={css.layout}>
      <div className={css.header}>
        <Header data={props.data}/>
      </div>
      <div className={css.main}>
        {props.children}
      </div>
      <div className={css.footer}>
        <Footer />
      </div>
      <VkVidget/>
    </div>
  </>
);

export default Layout;