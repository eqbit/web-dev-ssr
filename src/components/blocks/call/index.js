import css from './style.scss';
import {Container, ButtonDefault, ButtonSecondary, BlockTitle, Article} from '../../styled';
import Link from '../../../hoc/active-link';
import {ModalRecall} from '../../modals/recall';

class Call extends React.Component {
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
        <div className={css.callContainer}>
          <Container>
            <BlockTitle>Давайте обсудим <b>ваш проект</b></BlockTitle>
        
            <img src="/static/img/call-bg.png" className={css.callBg} alt=""/>
        
            <div className={css.callText}><Article>Выполняем задачи профессионально и в срок</Article></div>
        
            <div className={css.callButtons}>
              <div className={css.callButtonsItem}>
                <ButtonDefault onClick={() => this.handlePopupOpen('recall')}>Связаться</ButtonDefault>
              </div>
              <div className={css.callButtonsItem}>
                <Link href='/brief'><a><ButtonSecondary>Заполнить бриф</ButtonSecondary></a></Link>
              </div>
            </div>
          </Container>
        </div>
  
        {this.state.modals.recall && <ModalRecall handleClose={this.handlePopupClose}/>}
      </>
    );
  }
}

export {Call}