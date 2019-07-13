import Layout from '../src/hoc/layout';
import {Container, BlockSmallTitle, Article} from '../src/components/styled';
import axios from 'axios';
import {routes} from '../src/api/routes';
import {withRouter} from 'next/router';

class page extends React.PureComponent {
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
      <Layout data={
        {
          title: this.props.post.post_title,
          description: 'none yet'
        }
      }>
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

export default withRouter(page);