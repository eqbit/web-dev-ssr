import css from './style.scss';
import Link from '../../hoc/active-link';
import Head from 'next/head';
import {Container} from '../styled';
import {nav} from '../../api/nav';
import {be, phone} from '../../api/links';
import {MobileBoard} from '../mobile-board';
import classNames from 'classnames';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      boardOpen: false
    };
  }
  
  componentDidMount() {
    VK.Retargeting.Init("VK-RTRG-387258-4g0JO");
    VK.Retargeting.Hit();
  }
  
  handleBoard = e => {
    this.setState(prevState => ({
      boardOpen: !prevState.boardOpen
    }));
  };
  
  render() {
    return (
      <>
        <Head>
          <meta name="yandex-verification" content="dd592ce767b93120" />
          <title>{`${this.props.data.title} WebDev. Разработка и техническая поддежка сайтов в Тюмени`}</title>
          <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,400i,700&display=swap" rel="stylesheet"/>
          <link rel="shortcut icon" type="image/x-icon" href="/static/img/favicon.png"/>
          <meta name="Description"
                content={this.props.data.description}/>
          <meta property="og:description"
                content={this.props.data.description}/>
          <meta property="og:title"
                content={`${this.props.data.title}`}/>
          <script dangerouslySetInnerHTML={{__html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
           m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
           (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
           ym(54431302, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
           });`}} />
          <script src="https://vk.com/js/api/openapi.js?161" type="text/javascript" />
          <style dangerouslySetInnerHTML={{
            __html: `
              * {
                  box-sizing: border-box;
                }
                
                html, body {
                  font-family: 'Rubik', sans-serif;
                  margin: 0;
                  height: 100%;
                }
                
                #__next {
                  height: 100%;
                }
            `
          }}/>
        </Head>
        
        <header className={css.header}>
          <Container>
            <div className={css.row}>
              <Link prefetch href='/'>
                <a className={css.logo}>
                  <img src='/static/svg/logo.svg' alt=""/>
                </a>
              </Link>
              
              <div className={css.menu}>
                {
                  nav.map((item, index) => (
                    <Link key={index} prefetch href={item.path}>
                      <a className={css.menuItem}>{item.name}</a>
                    </Link>
                  ))
                }
              </div>
              
              <div className={css.phone}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.625 7.795C5.065 10.625 7.38 12.94 10.215 14.38L12.415 12.175C12.69 11.9 13.085 11.82 13.43 11.93C14.55 12.3 15.755 12.5 17 12.5C17.555 12.5 18 12.945 18 13.5V17C18 17.555 17.555 18 17 18C7.61 18 0 10.39 0 1C0 0.445 0.45 0 1 0H4.5C5.055 0 5.5 0.445 5.5 1C5.5 2.245 5.7 3.45 6.07 4.57C6.18 4.915 6.1 5.31 5.825 5.585L3.625 7.795Z"
                    fill="#4E00F7"/>
                </svg>
                
                <a className={css.phoneLink} href={phone.link}>{phone.title}</a>
              </div>
              
              <a href={be} target='_blank' className={css.be}>
                <img src="/static/svg/behance.svg" alt=""/>
              </a>
              
              <div
                className={classNames(css.boardToggle, this.state.boardOpen && css.boardToggleOpen)}
                onClick={this.handleBoard}>
                <svg width="35" height="20" viewBox="0 0 35 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="16" width="35" height="4" fill="#4E00F7"/>
                  <rect y="8" width="35" height="4" fill="#4E00F7"/>
                  <rect y="8" width="35" height="4" fill="#4E00F7"/>
                  <rect width="35" height="4" fill="#4E00F7"/>
                </svg>
              </div>
            </div>
          </Container>
        </header>
        
        <MobileBoard boardOpen={this.state.boardOpen} handleClose={this.handleBoard}/>
      </>
    );
  }
}

export default Header;