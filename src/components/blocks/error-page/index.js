import css from './style.scss';
import Link from '../../../hoc/active-link';

const Error = () => (
  <div className={css.error}>
    <img className={css.errorImg} src="/static/img/404.png" alt=""/>
    <div className={css.errorTitle}>404</div>
    <div className={css.errorSubtitle}>Запрашиваемая страница не найдена</div>
    <Link href='/'>
      <a className={css.errorLink}>На главную</a>
    </Link>
  </div>
);

export {Error}