import css from '../modal/style.scss';
import classNames from 'classnames';

const SuccessMessage = props => (
  <>
    <div className={classNames(css.popupOverlay, props.closing && css.popupOverlayClosing)} onClick={props.handleClose} />
    
    <div className={classNames(css.popup, props.closing && css.popupClosing)}>
      <div className={css.popupClose} onClick={props.handleClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16.8" y="4.8" width="3.39411" height="16.9706" transform="rotate(45 16.8 4.8)" fill="#333333"/>
          <rect x="7.2" y="4.8" width="16.9706" height="3.39411" transform="rotate(45 7.2 4.8)" fill="#333333"/>
        </svg>
      </div>
  
      <div className={css.popupSuccess}>
        <div className={css.popupSuccessTitle}>Спасибо за ваше обращение</div>
        <div className={css.popupSuccessText}>Мы перезвоним вам в течение рабочего дня</div>
      </div>
    </div>
  </>
);

export {SuccessMessage}