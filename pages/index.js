import Layout from '../src/hoc/layout';
import {TopBlock} from '../src/components/blocks/top-block';
import {Kpi} from '../src/components/blocks/kpi';
import {PortfolioTiles} from '../src/components/blocks/portfolio-tiles';
import {Principles} from '../src/components/blocks/principles';
import {Call} from '../src/components/blocks/call';

const data = {
  title: 'Создание сайтов под ключ в Тюмени',
  description: `Разработка сайтов под ключ в Тюмени. Занимаемся созданием, SEO продвижением, технической поддержкой, редизайном сайтов`
};

export default () => (
  <>
    <Layout data={data}>
      <TopBlock/>
      <Kpi/>
      <PortfolioTiles/>
      <Principles/>
      <Call/>
    </Layout>
  </>
)