import css from './style.scss';
import {Container} from '../../styled';

const items = [
  {
    title: 'Как быстро работаете?',
    text: `
      Мы уверены — для достижения хорошего результата нужен профессиональный подход.
      По этой причине мы не занимаемся проектами, которые нужны прямо сейчас, а лучше вчера
      <br /><br />
      Средняя скорость разработки — от 15 дней.
    `
  },
  {
    title: 'Сколько стоят услуги?',
    text: `
      Стоимость формируется в зависимости от объема поставленной задачи.
      Мы не завышаем планку и всегда согласуем оценку «на берегу». <br /><br />
      Цена разработки посадочной страницы начинается от 15 000 рублей.
    `
  },
  {
    title: 'Какие даете гарантии?',
    text: `
      Гарантируем ответственный подход и соблюдение сроков. Вы получите сайт с базовым SEO,
      адаптированный под все виды мобильных устройств.
      Подключим и настроим веб-аналитику. Всегда даем обратную связь.
    `
  }
];

const Conditions = () => (
  <Container>
    <div className={css.conditionsRow}>
      {items.map((item, index) => (
        <div key={index} className={css.conditionsRowItem}>
          <div className={css.conditionsRowItemTitle}>{item.title}</div>
          <div className={css.conditionsRowItemText} dangerouslySetInnerHTML={{__html: item.text}}/>
          
          <div className={css.conditionsRowItemBottom}>
            <svg width="133" height="16" viewBox="0 0 133 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3.5L14 12.5L26 3.5L38 12.5L50 3.5" stroke="#4E00F7" strokeWidth="5"/>
              <path d="M83 12.5L95 3.5L107 12.5L119 3.5L131 12.5" stroke="#4E00F7" strokeWidth="5"/>
              <path d="M47 3.5L59 12.5L71 3.5L83 12.5L95 3.5" stroke="#4E00F7" strokeWidth="5"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  </Container>
);

export {Conditions};