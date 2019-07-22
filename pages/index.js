import Layout from '../src/hoc/layout';
import {TopBlock} from '../src/components/blocks/top-block';
import {Kpi} from '../src/components/blocks/kpi';
import {PortfolioTiles} from '../src/components/blocks/portfolio-tiles';
import {Principles} from '../src/components/blocks/principles';
import {Call} from '../src/components/blocks/call';
import axios from 'axios/index';
import {mobileDetect} from '../src/api/mobile-detect';
import {routes} from '../src/api/routes';

const data = {
  title: 'Создание сайтов под ключ',
  description: `Разработка сайтов под ключ в Тюмени. Занимаемся созданием, SEO продвижением, технической поддержкой, редизайном сайтов`
};

class page extends React.Component {
  
  static async getInitialProps(context) {
    
    const response = await axios.get(routes.portfolio);
    
    return {
      posts: response.data
    };
  }
  
  render() {
    return (
      <>
        <Layout data={data}>
          <TopBlock/>
          <Kpi/>
          <PortfolioTiles posts={this.props.posts}/>
          <Principles/>
          <Call/>
        </Layout>
      </>
    )
  }
}

export default page