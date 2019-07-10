import css from './style.scss';
import {Container, ButtonDefault, ButtonSecondary, BlockTitle, Article} from '../../styled';
import Link from '../../../hoc/active-link';
import {ModalRecall} from '../../modals/recall';

class CallSimplified extends React.Component {
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
        <Container>
          <div className={css.callButtons}>
            <div className={css.callButtonsItem}>
              <ButtonDefault onClick={() => this.handlePopupOpen('recall')}>Связаться</ButtonDefault>
            </div>
            <div className={css.callButtonsItem}>
              <Link href='/brief'><a><ButtonSecondary>Заполнить бриф</ButtonSecondary></a></Link>
            </div>
          </div>
        </Container>
  
        {this.state.modals.recall && <ModalRecall handleClose={this.handlePopupClose}/>}
      </>
    );
  }
}

export {CallSimplified}