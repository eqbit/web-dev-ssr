import css from './style.scss';
import {Container, ButtonDefault, ButtonTransparent} from '../../styled';
import {ModalRecall} from '../../modals/recall';
import {ModalAudit} from '../../modals/audit';

class TopBlock extends React.Component {
  constructor() {
    super();
    
    this.state = {
      modals: {}
    }
  }
  
  handlePopupClose = () => {
    this.setState({modals: {}})
  };
  
  handlePopupOpen = name => {
    this.setState(prevState => {
      prevState.modals[name] = true;
      return prevState;
    })
  };
  
  render() {
    return (
      <>
        <div className={css.topBlock}>
          <div className={css.topBlockBg}>
            <img src="/static/img/top-block-bg.jpg" alt="" className={css.topBlockBgImg}/>
          </div>
          <Container>
            <div className={css.topBlockTitle}>Проектное <b>digital – агентство</b></div>
            <h1 className={css.topBlockSubTitle}>Разработка сайтов под ключ. Качественно. Вовремя. Без накрутки</h1>
            <div className={css.topBlockButtons}>
              <div className={css.topBlockButtonsItem}>
                <ButtonDefault onClick={() => this.handlePopupOpen('recall')}>Связаться</ButtonDefault>
              </div>
              <div className={css.topBlockButtonsItem}>
                <ButtonTransparent onClick={() => this.handlePopupOpen('audit')}>Заказать бесплатный аудит сайта</ButtonTransparent>
              </div>
            </div>
          </Container>
        </div>
        {this.state.modals.recall && <ModalRecall handleClose={this.handlePopupClose}/>}
        {this.state.modals.audit && <ModalAudit title='' handleClose={this.handlePopupClose}/>}
        
      </>
    );
  }
}

export {TopBlock}