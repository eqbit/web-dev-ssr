import css from './style.scss';

const FileInput = props => (
  <div className={css.fileInputContainer}>
    <input className={css.fileInput} type="file" name={props.name} onChange={props.onChange} ref={props.propRef}/>
    <span className={css.fileInputButton}>{props.children}</span>
  </div>
);

export default FileInput;