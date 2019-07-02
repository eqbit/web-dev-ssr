import css from './style.scss';
import {LargeContainer, BlockTitle, Container, ButtonDefault} from '../../styled';
import {routes} from '../../../api/routes';
import Link from '../../../hoc/active-link';

class PortfolioTiles extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      posts: [],
      route: routes.portfolio,
      page: 0,
      gotMore: true
    };
  }
  
  componentDidMount() {
    this.addPosts();
  };
  
  addPosts = () => {
    const currentRoute = this.state.page
      ? this.state.route + '?page=' + this.state.page
      : this.state.route;
    
    fetch(currentRoute)
      .then(res => res.json())
      .then(posts => !posts.data && posts.length && this.setState(prevState => {
        let gotMore = false;
      
        if(posts.length > 6) {
          posts.pop();
          gotMore = true;
        }
      
        return {
          posts: prevState.posts
            .concat(posts.map(this.mapPosts)),
          gotMore: gotMore
        };
      }));
  };
  
  mapPosts = post => {
    return {
      img: post.acf['announce-img'].sizes.medium_large,
      title: post.post_title,
      type: post.acf.type,
      slug: post.post_name
    };
  };
  
  requestMore = () => {
    this.setState(
      prevState => {page: prevState.page++},
      () => this.addPosts()
    );
    
  };
  
  render() {
    const {posts} = this.state;
    return (
      posts.length
        ? <>
          <Container>
            <BlockTitle>Примеры <b>наших работ</b></BlockTitle>
          </Container>
          <LargeContainer>
            <div className={css.tiles}>
              {posts.map((item, index) => (
                <Link key={index} href={`/portfolio/${item.slug}`}>
                  <a className={css.tileLink}>
                    <div className={css.tile}>
                      <div className={css.tileType}>{item.type}</div>
                      <div className={css.tileTitle}>{item.title}</div>
                      <div className={css.tileBg}>
                        <img src={item.img} alt=""/>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            {this.state.gotMore &&
            
            <div className={css.button}>
              <ButtonDefault style={{width: '100%'}} onClick={this.requestMore}>Показать больше примеров</ButtonDefault>
            </div>}
          </LargeContainer>
        </>
        : null
    );
  }
}

export {PortfolioTiles};