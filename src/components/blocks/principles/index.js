import css from './style.scss';
import {Container, BlockTitle} from '../../styled';

const data = [
  {
    title: 'Работа на результат',
    text: 'Ваш финансовый рост — наш KPI - потому что довольные клиенты приводят новых клиентов'
  },
  {
    title: 'Всегда на связи',
    text: 'Если нужно что-то срочно исправить — мы всегда на связи! '
  },
  {
    title: 'Ответственность',
    text: 'Мы не беремся за проекты, которые не сможем выполнить в срок'
  },
  {
    title: 'Отсутствие накрутки',
    text: 'Мы не платим за кофе-машину, уборщицу, офис, наш копирайтер может находиться в любой точке мира, где есть Wi-Fi. Поэтому мы можем предложить лучшую цену за свои услуги'
  },
  {
    title: 'Экспертность',
    text: 'Все сотрудники — профессионалы в своей области. Мы не исповедуем многопрофильность, каждый силен в чем-то своем'
  },
  {
    title: 'Прозрачность всех условий',
    text: 'Мы производим оценку проекта «на берегу» и не увеличиваем стоимость в ходе сотрудничества'
  }
];

const Principles = () => (
  <Container>
    <BlockTitle>Наши принципы <b>в работе с клиентами</b></BlockTitle>
    
    <div className={css.principlesGrid}>
      {data.map((item, index) => (
        <div key={index} className={css.principlesItem}>
          <div className={css.principlesItemTitle}>{item.title}</div>
          <div className={css.principlesItemText} dangerouslySetInnerHTML={{__html: item.text}}></div>
        </div>
      ))}
    </div>
  </Container>
);

export {Principles}


