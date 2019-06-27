import css from './style.scss';

const TextRadioInput = props => (
  <div className={css.textInputContainer}>
    <input
      className={css.input}
      type="radio" name={props.name}
      value={props.children}
      onChange={props.onChange}
    />
    
    <span className={css.textInput}>{props.children}</span>
  </div>
);

export {TextRadioInput}