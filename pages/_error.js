import Layout from '../src/hoc/layout';
import { withRouter } from 'next/router';
import {Error} from '../src/components/blocks/error-page';

const data = {
  title: '',
  description: `Информация о компании Web/Dev`
};

const page = () => (
  <>
    <Layout data={data}>
      <Error/>
    </Layout>
  </>
);

export default withRouter(page);