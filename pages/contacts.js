import Layout from '../src/hoc/layout';
import {Container, PageTitle} from '../src/components/styled';
import { withRouter } from 'next/router';
import {CallSimplified} from '../src/components/blocks/call-simplified';

const data = {
  title: 'Контакты.',
  description: `Наши контакты`
};

const page = () => (
  <>
    <style jsx>{`
      .hr {
        height: 2px;
        width: 100%;
        background: #A6A6A6;
      }
      
      .contacts {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(auto-fit, 200px);
        grid-gap: 20px;
        margin-top: 40px;
      }
      
      .contacts-item {
        display: flex;
        align-items: center;
      }
      
      .contacts-item svg {
        margin-right: 10px;
      }
      
      .contacts-link {
        color: #333;
      }
      
      .contacts-link:hover {
        color: #4E00F7;
      }
      
      .buttons {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        max-width: 500px;
        grid-gap: 40px;
        margin-top: 100px;
      }
    `}</style>
    
    <Layout data={data}>
      <Container>
        <PageTitle>Наши контакты</PageTitle>
        
        <div className='hr'></div>
        
        <div className="contacts">
          <div className="contacts-item contacts-phone">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.625 7.795C5.065 10.625 7.38 12.94 10.215 14.38L12.415 12.175C12.69 11.9 13.085 11.82 13.43 11.93C14.55 12.3 15.755 12.5 17 12.5C17.555 12.5 18 12.945 18 13.5V17C18 17.555 17.555 18 17 18C7.61 18 0 10.39 0 1C0 0.445 0.45 0 1 0H4.5C5.055 0 5.5 0.445 5.5 1C5.5 2.245 5.7 3.45 6.07 4.57C6.18 4.915 6.1 5.31 5.825 5.585L3.625 7.795Z" fill="#4E00F7"/>
            </svg>
  
            <a href="tel:+7 (952) 347-34-19" className="contacts-link">+7 (952) <b>347-34-19</b></a>
          </div>
          
          <div className="contacts-item contacts-mail">
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path d="M20.1922 2.74829H2.81254C1.26112 2.74829 0 4.00941 0 5.56083V17.4392C0 18.9906 1.26112 20.2517 2.81254 20.2517H20.1875C21.7389 20.2517 23 18.9906 23 17.4392V5.56559C23.0048 4.01417 21.7436 2.74829 20.1922 2.74829ZM21.7198 17.4392C21.7198 18.2815 21.0346 18.9668 20.1922 18.9668H2.81254C1.97021 18.9668 1.28492 18.2815 1.28492 17.4392V5.56559C1.28492 4.72325 1.97021 4.03797 2.81254 4.03797H20.1875C21.0298 4.03797 21.7151 4.72325 21.7151 5.56559V17.4392H21.7198Z" fill="#4E00F7"/>
                <path d="M14.4984 11.3525L20.1235 6.308C20.3852 6.07005 20.409 5.66554 20.1711 5.39904C19.9331 5.13729 19.5286 5.1135 19.2621 5.35145L11.505 12.3138L9.99169 10.9622C9.98693 10.9575 9.98217 10.9527 9.98217 10.948C9.94886 10.9147 9.91554 10.8861 9.87747 10.8576L3.71939 5.34669C3.45289 5.10874 3.04838 5.13253 2.81043 5.39904C2.57249 5.66554 2.59628 6.07005 2.86278 6.308L8.55448 11.3953L2.88658 16.7015C2.62959 16.9442 2.61532 17.3488 2.85802 17.6105C2.98651 17.7438 3.15784 17.8151 3.32916 17.8151C3.4862 17.8151 3.64325 17.758 3.76698 17.6438L9.52055 12.2614L11.0815 13.6558C11.2052 13.7653 11.3575 13.8176 11.5098 13.8176C11.6621 13.8176 11.8191 13.7605 11.9381 13.6511L13.5419 12.2139L19.2621 17.6486C19.3859 17.7675 19.5477 17.8247 19.7047 17.8247C19.876 17.8247 20.0426 17.758 20.1711 17.6248C20.4138 17.3678 20.4043 16.9585 20.1473 16.7158L14.4984 11.3525Z" fill="#4E00F7"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="23" height="23" fill="white" transform="matrix(-1 0 0 1 23 0)"/>
                </clipPath>
              </defs>
            </svg>
  
            <a className="contacts-link" href="mailto:web.d3v@yandex.ru">web.d3v@yandex.ru</a>
          </div>
        </div>
      </Container>
      <CallSimplified />
    </Layout>
  </>
);

export default withRouter(page);