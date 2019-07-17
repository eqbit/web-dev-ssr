import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom
} from 'pure-react-carousel';
import css from './style.scss';
import {Container} from '../../styled';
import classNames from 'classnames';
import Lightbox from 'react-image-lightbox';

class PortfolioSliderDev extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      checked: 0,
      sliderData: this.props.post.acf['after-work'],
      visibleSlides: this.props.isMobile
        ? 1
        : 3 > this.props.post.acf['after-work'].length
          ? this.props.post.acf['after-work'].length
          : 3
    };
  }
  
  handleLightbox = src => {
    this.setState({
      lightboxImage: src,
      lightboxIsOpen: true
    });
  };
  
  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }
  
  resize = () => {
    this.setState({
      visibleSlides: window.innerWidth > 1000
        ? 3 > this.state.sliderData.length
          ? this.state.sliderData.length
          : 3
        : 1
    })
  };
  
  render() {
    
    return (
      <>
        {
          this.state.lightboxIsOpen &&
          <Lightbox
            mainSrc={this.state.lightboxImage}
            onCloseRequest={() => this.setState({lightboxIsOpen: false})}
          />
        }
        <div className={css.slider}>
          
          <Container>
            <div className={css.sliderInner}>
              
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={this.state.sliderData.length}
                visibleSlides={this.state.visibleSlides}
                className={css.carousel}
                dragEnabled={false}
              >
                <Slider>
                  {this.state.sliderData.map((item, index) => (
                    <Slide index={index} key={index}>
                      <div className={css.sliderItem}>
                        <div className={css.sliderItemImg}>
                          <ImageWithZoom
                            onClick={() => this.handleLightbox(item.img.url)}
                            src={item.img.sizes.medium_large}/>
                        </div>
                        
                        <div className={css.sliderItemTitle}>
                          {item.description}
                        </div>
                      </div>
                    </Slide>
                  ))}
                
                </Slider>
                
                <ButtonBack className={classNames(css.sliderBtn, css.sliderBtnPrev)}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                      <circle cx="20" cy="20" r="20" fill="white"/>
                      <rect width="3.63057" height="14.5223" rx="1.81528"
                            transform="matrix(0.69253 0.721389 -0.69253 0.721389 23.0571 10)" fill="#666666"/>
                      <rect width="3.63057" height="14.5223" rx="1.81528"
                            transform="matrix(-0.69253 0.721389 -0.69253 -0.721389 25.5713 28.3335)" fill="#666666"/>
                    </g>
                  </svg>
                </ButtonBack>
                <ButtonNext className={classNames(css.sliderBtn, css.sliderBtnNext)}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.2">
                      <circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="white"/>
                      <rect width="3.63057" height="14.5223" rx="1.81528"
                            transform="matrix(-0.69253 0.721389 0.69253 0.721389 16.9429 10)" fill="#666666"/>
                      <rect width="3.63057" height="14.5223" rx="1.81528"
                            transform="matrix(0.69253 0.721389 0.69253 -0.721389 14.4287 28.3335)" fill="#666666"/>
                    </g>
                  </svg>
                </ButtonNext>
              
              </CarouselProvider>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export {PortfolioSliderDev};

