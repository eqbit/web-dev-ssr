import css from './style.scss';
import {TextRadioInput as Radio} from '../TextRadioInput';
import TextareaAutosize from 'react-autosize-textarea';
import FileInput from '../FileInput';

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
          
          <div>
            <Radio name='type' onChange={this.setData}>Корпоративный сайт</Radio>
            <Radio name='type' onChange={this.setData}>Интернет-магазин</Radio>
            <Radio name='type' onChange={this.setData}>Лендинг</Radio>
            <Radio name='type' onChange={this.setData}>Почтовая рассылка</Radio>
            <Radio name='type' onChange={this.setData}>Другое</Radio>
          </div>
        </div>
  
        <div className={css.row}>
          <div className={css.title}>Бюджет</div>
    
          <div>
            <Radio name='budget' onChange={this.setData}>25 - 50 тысяч рублей</Radio>
            <Radio name='budget' onChange={this.setData}>50 - 100 тысяч рублей</Radio>
            <Radio name='budget' onChange={this.setData}>Свыше 100 тысяч рублей</Radio>
            <Radio name='budget' onChange={this.setData}>Другое</Radio>
          </div>
        </div>
  
        <div className={css.row}>
          <div className={css.title}>Задача</div>
    
          <div>
            <TextareaAutosize name='task' className={css.area} onChange={this.setData}/>
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
    
          <div>
            <Radio name='from' onChange={this.setData}>Рекомендации</Radio>
            <Radio name='from' onChange={this.setData}>Соц. сети</Radio>
            <Radio name='from' onChange={this.setData}>Другое</Radio>
          </div>
        </div>
  
        <div className={css.row}>
          <div className={css.title}>Контактные данные</div>
    
          <div>
            
          </div>
        </div>
      </>
    )
  }
}

export {Brief}