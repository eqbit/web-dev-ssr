import css from './style.scss';
import {Container, ButtonDefault, ButtonSecondary, BlockTitle, Article} from '../../styled';
import Link from '../../../hoc/active-link';

const Call = () => (
  <div className={css.callContainer}>
    <Container>
      <BlockTitle>Давайте обсудим <b>ваш проект</b></BlockTitle>
  
      <img src="/static/img/call-bg.png" className={css.callBg} alt=""/>
      
      <div className={css.callText}><Article>Выполняем задачи профессионально и в срок</Article></div>
      
      <div className={css.callButtons}>
        <div className={css.callButtonsItem}>
          <ButtonDefault>Связаться</ButtonDefault>
        </div>
        <div className={css.callButtonsItem}>
          <Link href='/brief'><a><ButtonSecondary>Заполнить бриф</ButtonSecondary></a></Link>
        </div>
      </div>
    </Container>
  </div>
);

export {Call}