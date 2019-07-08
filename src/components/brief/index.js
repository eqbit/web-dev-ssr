import css from './style.scss';
import {TextRadioInput as Radio} from '../text-radio-input';
import TextareaAutosize from 'react-autosize-textarea';
import FileInput from '../file-input';
import {TextInput} from '../text-input';
import {ButtonDefault} from '../styled';

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
  
  render() {
    return (
      <>
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
              placeholder='Имя'
              required
              onChange={this.setData}
              img='/static/img/user.png'/>
  
            <TextInput
              name='phone'
              placeholder='Телефон'
              required
              onChange={this.setData}
              img='/static/img/phone.png'/>
          </div>
        </div>
        
        <div className={css.submitRow}>
          <ButtonDefault>Отправить</ButtonDefault>
          <div className={css.submitRowPolicy}>
            Нажимая на кнопку, вы даете согласие с <br/>
            <a target='_blank' href='/policy' className={css.link}>политикой конфиденциальности</a>
          </div>
        </div>
      </>
    )
  }
}

export {Brief}