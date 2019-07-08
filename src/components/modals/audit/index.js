import css from './style.scss';
import {TextInput} from '../../text-input/index';
import {ButtonDefaultFull} from '../../styled/index';
import Link from '../../../hoc/active-link/index';

class ModalAudit extends React.PureComponent {
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
          <div className={css.popupTitle}>Заказать аудит сайта</div>
          
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
  
            <TextInput
              name='site'
              placeholder='Адрес сайта'
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

export {ModalAudit}