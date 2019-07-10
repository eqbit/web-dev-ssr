import Layout from '../src/hoc/layout';
import {Container, PageTitle, Article} from '../src/components/styled';
import { withRouter } from 'next/router';
import {Conditions} from '../src/components/blocks/conditions';
import {Kpi} from '../src/components/blocks/kpi';


const page = () => (
  <>
    <Layout>
      <Container>
        <PageTitle>О компании</PageTitle>
        <Article>
          Наши центральные ценности — честность и порядочность в работе. Мы создаем проекты, которые не стыдно показать.
        </Article>
      </Container>
      <Conditions/>
      <Kpi title='Наш подход к работе'/>
    </Layout>
  </>
);

export default withRouter(page);