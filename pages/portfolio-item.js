import Layout from '../src/hoc/layout';
import {Container, BlockSmallTitle, Article, ButtonDefault} from '../src/components/styled';
import axios from 'axios';
import {routes} from '../src/api/routes';
import {withRouter} from 'next/router';
import {PortfolioSlider} from '../src/components/blocks/portfolio-slider';
import {FancyboxStyles} from '../src/global-styles/fancybox';
import {PureReactSliderStyles} from '../src/global-styles/pure-react-slider';
import {Mockup} from '../src/components/mockup';
import {mobileDetect} from '../src/api/mobile-detect';

class page extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  
  static async getInitialProps( context ) {
    
    const slug = context.query.slug;
    
    const response = await axios.get(routes.portfolioSingle + slug);
    
    const isMobile = mobileDetect(context.req.headers['user-agent']);
    
    return {
      post: response.data[0],
      isMobile
    };
  }
  
  render() {
    return (
      <Layout data={
        {
          title: this.props.post.post_title,
          description: 'none yet'
        }
      }>
        <style jsx>{`
          .linkRow {
            margin-top: 60px;
          }
        `}</style>
        
        <FancyboxStyles/>
        <PureReactSliderStyles/>
        
        <Container>
          <BlockSmallTitle>{this.props.post.post_title}</BlockSmallTitle>
          <Article>
            {this.props.post.acf.description}
          </Article>
        </Container>
  
        {
          this.props.post.acf.type === 'redesign'
            && this.props.post.acf['after-work']
            && this.props.post.acf['before-work']
            && <PortfolioSlider post={this.props.post} isMobile={this.props.isMobile}/>
        }
        
        <Container>
          <BlockSmallTitle>Подробно о кейсе</BlockSmallTitle>
          <Article>
            {this.props.post.acf['additional-info']}
          </Article>
          
          <Mockup data={this.props.post.acf['mobile-img']}/>
  
          <BlockSmallTitle>Какие работы проведены</BlockSmallTitle>
          <Article>
            {this.props.post.acf['work-done']}
          </Article>
  
          <div className="linkRow">
            <a href={this.props.post.acf.link} target='_blank'>
              <ButtonDefault>Перейти на сайт</ButtonDefault>
            </a>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default withRouter(page);