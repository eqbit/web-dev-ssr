import css from './style.scss';

const Container = props => <div className={css.container}>{props.children}</div>;
const PageTitle = props => <div className={css.pageTitle}>{props.children}</div>;
const Article = props => <div className={css.pageText}>{props.children}</div>;

export {Container, PageTitle, Article}