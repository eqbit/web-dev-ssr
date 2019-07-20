import css from './style.scss';
import {Container, BlockTitle} from '../../styled';

const Kpi = props => (
  <Container>
    {
      props.title
        ? <BlockTitle>{props.title}</BlockTitle>
        : <BlockTitle>Ваш финансовый рост — <b>наш KPI</b></BlockTitle>
    }
    
    
    <div className={css.kpiRow}>
      <div className={css.kpiRowItem}>
        <div className={css.kpiRowItemTop}>
          <img src="/static/img/kpi-1.png" alt=""/>
        </div>
        
        <div className={css.kpiRowItemTitle}>Погружаемся в Ваш бизнес</div>
        
        <div className={css.kpiRowItemText}>
          Мы не тратим время на «офисную волокиту». Оперативно оценим объем задачи и приступим к работе
        </div>
      </div>
      
      <div className={css.kpiRowItem}>
        <div className={css.kpiRowItemTop}>
          <img src="/static/img/kpi-2.png" alt=""/>
        </div>
        
        <div className={css.kpiRowItemTitle}>Разрабатываем стратегию</div>
        
        <div className={css.kpiRowItemText}>
          Формируем структуру, пишем офферы, согласуем идеи. Учитываем специфику вашего бизнеса и целевой аудитории
        </div>
      </div>
      
      <div className={css.kpiRowItem}>
        <div className={css.kpiRowItemTop}>
          <img src="/static/img/kpi-3.png" alt=""/>
        </div>
        
        <div className={css.kpiRowItemTitle}>Дизайн и адаптив</div>
        
        <div className={css.kpiRowItemText}>
          Создаем удобный адаптивный дизайн, который содержит систему убеждения и формирования доверия
        </div>
      </div>
      
      <div className={css.kpiRowItem}>
        <div className={css.kpiRowItemTop}>
          <img src="/static/img/kpi-4.png" alt=""/>
        </div>
        
        <div className={css.kpiRowItemTitle}>Программирование</div>
        
        <div className={css.kpiRowItemText}>
          Выполняем верстку и кодинг по согласованному дизайну. Адаптируем сайт для мобильных устройств. Тестируем и
          подключаем аналитику
        </div>
      </div>
    </div>
  </Container>
);

export {Kpi};