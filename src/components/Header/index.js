import css from './style.scss'
import app from '../../scss/app.scss'
import Link from '../../hoc/Link'
import Head from 'next/head'
import routes from "../../api/routes";

const Header = () => (
  <>
    <Head>
      <title>WebDev Studio</title>
      <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,400i,700&display=swap" rel="stylesheet" />
      <style>
        {`
            body {
              font-family: 'Rubik', sans-serif;
            }
        `}
      </style>
    </Head>
    
    <header className={css.header}>
      <div className={app.container}>
        <div className={css.row}>
          <Link prefetch href='/'>
            <a>
              <img src='/static/svg/logo.svg' alt=""/>
            </a>
          </Link>
          
          <div className={css.menu}>
            <Link prefetch href='/'>
              <a className={css.menuItem}>Портфолио</a>
            </Link>
            
            <Link prefetch href='/conditions'>
              <a className={css.menuItem}>Условия работы</a>
            </Link>
            
            <Link prefetch href='/contacts'>
              <a className={css.menuItem}>Контакты</a>
            </Link>
          </div>
          
          <a href='https://www.behance.net/Mikhail_Bulatov' target='_blank' className={css.be}>
            <img src="/static/svg/behance.svg" alt=""/>
          </a>
        </div>
      </div>
    </header>
  </>
);

export default Header;