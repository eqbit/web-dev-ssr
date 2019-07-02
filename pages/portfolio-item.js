import Layout from '../src/hoc/layout';
import {Container, BlockSmallTitle, Article} from '../src/components/styled';
import axios from 'axios';
import {routes} from '../src/api/routes';

export default class extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }
  
  static async getInitialProps( context ) {
    
    const slug = context.query.slug;
    const response = await axios.get(routes.portfolioSingle + slug);
    
    return {post: response.data[0]};
  }
  
  render() {
    return (
      <Layout>
        <Container>
          <BlockSmallTitle>{this.props.post.post_title}</BlockSmallTitle>
          <Article>
            test content
          </Article>
        </Container>
      </Layout>
    );
  }
}