import css from './style.scss';

const ButtonRadioInput = props => (
  <div className={css.textInputContainer}>
    <input
      className={css.input}
      type="radio" name={props.name}
      value={props.children}
      onChange={props.onChange}
      checked={props.checked}
    />
    
    <span className={css.textInput}>{props.children}</span>
  </div>
);

export {ButtonRadioInput}