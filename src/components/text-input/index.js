import css from './style.scss';
import classNames from 'classnames';
import InputMask from 'react-input-mask';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={css.inputContainer}>
        {this.props.invalid && <div className={css.errorMessage}>Пожалуйста, проверьте корректность данных</div>}
        <InputMask
          type="text"
          className={classNames(css.textInput, this.props.invalid && css.textInputInvalid)}
          name={this.props.name}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder}
          required={this.props.required}
          mask={this.props.inputmask || null}
        />
        <img className={css.img} src={this.props.img} alt=""/>
      </div>
    );
  }
}

export {TextInput}