import css from './style.scss';
import {TextRadioInput as Radio} from '../text-radio-input';
import TextareaAutosize from 'react-autosize-textarea';
import FileInput from '../file-input';
import {TextInput} from '../text-input';
import {Submit} from '../styled';
import {validateName, validatePhone} from '../../api/input-validators';
import {BriefHandle} from '../../api/form-handle';
import {SuccessMessage} from '../modals/success-message';

class Brief extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
    this.fileInput = React.createRef();
  }
  
  setData = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  };
  
  handleFileInput = e => {
    e.stopPropagation();
    this.setState({
      file: this.fileInput.current.files[0]
    });
  };
  
  handleSubmit = e => {
    e.preventDefault();
    
    this.setState({
      submitted: true
    });
    
    if(this.validate()) {
      console.log('okay');
      this.handleData();
    } else {
      console.log('nah')
    }
  };
  
  handleData = async () => {
    let data = new FormData;
  
    for(let key in this.state) {
      data.append(key, this.state[key])
    }
  
    let success = await BriefHandle(data);
  
    if(success) {
      this.setState({
        success: true
      });
  
      setTimeout(() => {
        this.setState({
          successMessageClosing: true
        });
  
        this.handleSuccessMessageClose();
      }, 3000);
    }
  };
  
  validate = () => {
    const {name, phone} = this.state;
    
    return validateName(name) && validatePhone(phone);
  };
  
  handleSuccessMessageClose = () => {
    this.setState({
      successMessageClosing: true
    });
    
    setTimeout(() => {
      this.setState({
        successMessageClosed: true
      });
    }, 300)
  };
  
  render() {
    
    const {name, phone} = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <div className={css.row}>
          <div className={css.title}>Тип проекта</div>
          
          <div className={css.radioRow}>
            <Radio name='type' onChange={this.setData}>Корпоративный сайт</Radio>
            <Radio name='type' onChange={this.setData}>Интернет-магазин</Radio>
            <Radio name='type' onChange={this.setData}>Лендинг</Radio>
            <Radio name='type' onChange={this.setData}>Почтовая рассылка</Radio>
            <Radio name='type' onChange={this.setData}>Другое</Radio>
          </div>
        </div>
  
        <div className={css.row}>
          <div className={css.title}>Бюджет</div>
    
          <div className={css.radioRow}>
            <Radio name='budget' onChange={this.setData}>До 25 тысяч рублей</Radio>
            <Radio name='budget' onChange={this.setData}>25 - 50 тысяч рублей</Radio>
            <Radio name='budget' onChange={this.setData}>50 - 100 тысяч рублей</Radio>
            <Radio name='budget' onChange={this.setData}>Свыше 100 тысяч рублей</Radio>
          </div>
        </div>
  
        <div className={css.row}>
          <div className={css.title}>Задача</div>
    
          <div>
            <TextareaAutosize
              name='task'
              className={css.area}
              onChange={this.setData}
              placeholder='Расскажите подробнее о проекте'
            />
          </div>
        </div>
        
        <div className={css.fileRow}>
          <FileInput propRef={this.fileInput} name='fileInput' onChange={this.handleFileInput}>
            {
              !!this.state.file
                ? this.state.file.name.length > 15
                  ? this.state.file.name.substr(0, 13) + '...'
                  : this.state.file.name
                : 'Прикрепить файл'
            }
          </FileInput>
        </div>
  
        <div className={css.row}>
          <div className={css.title}>Откуда вы узнали о нас?</div>
    
          <div className={css.radioRow}>
            <Radio name='from' onChange={this.setData}>Рекомендации</Radio>
            <Radio name='from' onChange={this.setData}>Соц. сети</Radio>
            <Radio name='from' onChange={this.setData}>Другое</Radio>
          </div>
        </div>
  
        <div className={css.row}>
          <div className={css.title}>Контактные данные</div>
    
          <div className={css.textInputRow}>
            <TextInput
              name='name'
              placeholder='Имя*'
              required
              onChange={this.setData}
              invalid={this.state.submitted && !validateName(name)}
              img='/static/img/user.png'/>
  
            <TextInput
              name='phone'
              placeholder='Телефон*'
              required
              onChange={this.setData}
              invalid={this.state.submitted && !validatePhone(phone)}
              inputmask='+7(999)999-99-99'
              img='/static/img/phone.png'/>
          </div>
        </div>
        
        <div className={css.submitRow}>
          <Submit buttonClass='Default'
                  disabled={this.state.success}
          >
            Отправить
          </Submit>
          <div className={css.submitRowPolicy}>
            Нажимая на кнопку, вы даете согласие с <br/>
            <a target='_blank' href='/policy' className={css.link}>политикой конфиденциальности</a>
          </div>
        </div>
        
        {
          this.state.success && !this.state.successMessageClosed
          && <SuccessMessage handleClose={this.handleSuccessMessageClose} closing={this.state.successMessageClosing}/>
        }
      </form>
    )
  }
}

export {Brief}