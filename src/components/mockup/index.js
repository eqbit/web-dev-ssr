import css from './style.scss';
import {
  CarouselProvider,
  Slider,
  Slide
} from 'pure-react-carousel';

class Mockup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      images: props.data
    }
  }
  
  render() {
    return (
      <>
        <div className={css.mockup}>
          <div className={css.mockupBg}>
            <img src="/static/img/mockup.png" alt=""/>
          </div>
  
          <CarouselProvider
            naturalSlideWidth='163px'
            naturalSlideHeight={100}
            totalSlides={this.state.images.length}
            visibleSlides={1}
            dragEnabled={false}
            isPlaying={true}
            interval={6000}
            className={css.mockupView}
          >
            <Slider>
              {this.state.images.map((item, index) => (
                <Slide index={index} key={index}>
                  <img src={item.img.url} alt=""/>
                </Slide>
              ))}
    
            </Slider>
  
          </CarouselProvider>
        </div>
      </>
    )
  }
}

export {Mockup}