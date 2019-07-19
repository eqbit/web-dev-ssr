import Layout from '../src/hoc/layout';
import {Container, PageTitle, Article} from '../src/components/styled';
import {Brief} from '../src/components/brief';
import { withRouter } from 'next/router';
import {phone} from '../src/api/links';

const data = {
  title: 'Бриф.',
  description: `Форма заказа разработки сайта`
};

const page = () => (
  <>
    <style jsx>{`
      .link {
        color: #4E00F7;
        text-decoration: none;
      }
      
      @media (max-width: 1023px) {
        .link {
          display: block;
          font-size: 20px;
          margin-top: 10px;
        }
      }
    `}</style>
    
    <Layout data={data}>
      <Container>
        <PageTitle>Заполните бриф</PageTitle>
        <Article>
          Оставьте заявку, либо звоните, мы пообщаемся и сами все за вас заполним: +7(902)813-79-11
        </Article>
        
        <Brief/>
      </Container>
    </Layout>
  </>
);

export default withRouter(page);