import Layout from '../src/hoc/layout';
import {PortfolioTiles} from '../src/components/blocks/portfolio-tiles';

const data = {
  title: 'Примеры наших работ',
  description: `Примеры работ по разработке сайтов с нуля и полной переработке существующих страниц`
};

export default () => (
  <>
    <Layout data={data}>
      <PortfolioTiles/>
    </Layout>
  </>
)