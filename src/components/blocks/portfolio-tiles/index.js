import css from './style.scss';
import {LargeContainer, BlockTitle, Container, ButtonDefault} from '../../styled';
import {routes} from '../../../api/routes';
import Link from '../../../hoc/active-link';

class PortfolioTiles extends React.PureComponent {
  constructor(){
    super();
    this.state  = {
      posts: [],
      route: routes.portfolio
    }
  }
  
  componentDidMount(){
    fetch(this.state.route)
      .then(res  =>  res.json())
      .then(posts  =>  this.setState(() => {
        return { posts:  posts.map(this.mapPosts)};
      }));
  }
  
  mapPosts(post){
    console.log(post)
    return {
      img:  post.acf['announce-img'].sizes.medium_large,
      title:  post.post_title,
      type:  post.acf.type,
      slug: post.post_name
    }
  }
  
  render() {
    const {posts} = this.state;
    return (
      <>
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
          <div className={css.button}>
            <Link href='/portfolio'>
              <a><ButtonDefault style={{width: '100%'}}>Показать больше примеров</ButtonDefault></a>
            </Link>
          </div>
        </LargeContainer>
      </>
    )
  }
}

export {PortfolioTiles}