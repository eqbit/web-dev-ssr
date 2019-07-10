import css from './style.scss';
import {TextInput} from '../../text-input/index';
import {ButtonDefaultFull} from '../../styled/index';
import Link from '../../../hoc/active-link/index';
import {CallHandle} from '../../../api/form-handle';
import classNames from 'classnames';

class Modal extends React.Component {
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
  
  submitHandle = async () => {
    const success = await CallHandle('submit_recall', this.props.title, this.state);
    
    if(success) {
      this.setState(() => {
        return {
          success: true
        }
      });
      
      setTimeout(() => {
        this.handleClose();
      }, 3000)
    }
  };
  
  handleClose = () => {
    this.setState(prevState => {
      prevState.closing = true;
      console.log(prevState)
      return prevState;
    });
    
    setTimeout(() => {
      this.props.handleClose();
    }, 300)
  };
  
  render() {
    return (
      <>
        <div className={classNames(css.popupOverlay, this.state.closing && css.popupOverlayClosing)} onClick={this.handleClose} />
        
        <div className={classNames(css.popup, this.state.closing && css.popupClosing)}>
          <div className={css.popupClose} onClick={this.handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="16.8" y="4.8" width="3.39411" height="16.9706" transform="rotate(45 16.8 4.8)" fill="#333333"/>
              <rect x="7.2" y="4.8" width="16.9706" height="3.39411" transform="rotate(45 7.2 4.8)" fill="#333333"/>
            </svg>
          </div>
          
          {!this.state.success && <div className={css.popupTitle}>{this.props.title}</div>}
          
          {
            this.state.success
              ?
              <div className={css.popupSuccess}>
                <div className={css.popupSuccessTitle}>Спасибо за ваше обращение</div>
                <div className={css.popupSuccessText}>Мы перезвоним вам в течение рабочего дня</div>
              </div>
              
              :
              <div className={css.popupInputs}>
                {this.props.inputs.map((item, index) => (
                  <TextInput
                    key={index}
                    name={item.name}
                    placeholder={item.placeholder}
                    required={item.required}
                    onChange={this.setData}/>
                ))}
    
                <div className={css.popupSubmit}>
                  <ButtonDefaultFull onClick={this.submitHandle}>
                    Отправить
                  </ButtonDefaultFull>
      
                  <div className={css.popupAgreement}>
                    Нажимая на кнопку, вы даете согласие с
                    <Link href='/policy'>
                      <a target='_blank'>политикой конфиденциальности</a>
                    </Link>
                  </div>
                </div>
              </div>
          }
        </div>
      </>
    );
  }
}

export {Modal}