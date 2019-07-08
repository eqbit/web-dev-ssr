import css from './style.scss';

const TextInput = props => (
  <div className={css.inputContainer}>
    <input
      type="text"
      className={css.textInput}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required={props.required}
    />
    <img className={css.img} src={props.img} alt=""/>
  </div>
);

export {TextInput}