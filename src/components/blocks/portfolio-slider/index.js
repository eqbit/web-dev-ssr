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
import {ButtonRadioInput as Radio} from '../../button-radio-input';
import classNames from 'classnames';
import Lightbox from 'react-image-lightbox';

class PortfolioSlider extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      checked: 0,
      sliderData: this.props.post.acf['after-work'],
      visibleSlides: this.props.isMobile
        ? 1
        : 2
    };
  }
  
  handleRadio = index => {
    this.setState({
      checked: index,
      sliderData: index ? this.props.post.acf['before-work'] : this.props.post.acf['after-work']
    });
  };
  
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
      visibleSlides: window.innerWidth < 1000
        ? 1
        : 2
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
              <div className={css.sliderInnerButtons}>
                <Radio name='chooser'
                       onChange={() => this.handleRadio(0)}
                       checked={this.state.checked === 0}>После редизайна</Radio>
                <Radio name='chooser'
                       onChange={() => this.handleRadio(1)}
                       checked={this.state.checked === 1}>До редизайна</Radio>
              </div>
              
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={3}
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

export {PortfolioSlider};

