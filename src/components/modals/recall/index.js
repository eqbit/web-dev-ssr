import css from './style.scss';
import {TextInput} from '../../text-input/index';
import {ButtonDefaultFull} from '../../styled/index';
import Link from '../../../hoc/active-link/index';

class ModalRecall extends React.PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {}
  }
  
  setData = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };
  
  render() {
    return (
      <>
        <div className={css.popupOverlay} onClick={this.props.handleClose} />
        
        <div className={css.popup}>
          <div className={css.popupClose} onClick={this.props.handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="16.8" y="4.8" width="3.39411" height="16.9706" transform="rotate(45 16.8 4.8)" fill="#333333"/>
              <rect x="7.2" y="4.8" width="16.9706" height="3.39411" transform="rotate(45 7.2 4.8)" fill="#333333"/>
            </svg>
          </div>
          
          <div className={css.popupTitle}>Заказать обратный звонок</div>
          
          <div className={css.popupInputs}>
            <TextInput
              name='name'
              placeholder='Имя'
              required
              onChange={this.setData}/>
  
            <TextInput
              name='phone'
              placeholder='Телефон'
              required
              onChange={this.setData}/>
            
            <div className={css.popupSubmit}>
              <ButtonDefaultFull>Отправить</ButtonDefaultFull>
              
              <div className={css.popupAgreement}>
                Нажимая на кнопку, вы даете согласие с
                <Link href='/policy'>
                  <a target='_blank'>политикой конфиденциальности</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export {ModalRecall}