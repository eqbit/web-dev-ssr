import Layout from '../src/hoc/layout';
import {Container, PageTitle, Article} from '../src/components/styled';
import { withRouter } from 'next/router';

const page = () => (
  <>
    <Layout>
      <Container>
        <PageTitle>Отзывы</PageTitle>
      </Container>
    </Layout>
  </>
);

export default withRouter(page);