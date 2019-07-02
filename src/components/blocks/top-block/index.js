import css from './style.scss';
import {Container, ButtonDefault, ButtonTransparent} from '../../styled';

const TopBlock = () => (
  <div className={css.topBlock}>
    <div className={css.topBlockBg}>
      <img src="/static/img/top-block-bg.jpg" alt="" className={css.topBlockBgImg}/>
    </div>
    <Container>
      <div className={css.topBlockTitle}>Проектное <b>digital – агентство</b></div>
      <div className={css.topBlockSubTitle}>Качественные сайты. Вовремя. Без накрутки</div>
      <div className={css.topBlockButtons}>
        <div className={css.topBlockButtonsItem}><ButtonDefault>Связаться</ButtonDefault></div>
        <div className={css.topBlockButtonsItem}><ButtonTransparent>Заказать бесплатный аудит сайта</ButtonTransparent></div>
      </div>
    </Container>
  </div>
);

export {TopBlock}