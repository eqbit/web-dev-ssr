import css from './style.scss';

const Container = props => <div className={css.container}>{props.children}</div>;
const LargeContainer = props => <div className={css.largeContainer}>{props.children}</div>;
const PageTitle = props => <div className={css.pageTitle}>{props.children}</div>;
const BlockTitle = props => <div className={css.blockTitle}>{props.children}</div>;
const Article = props => <div className={css.pageText}>{props.children}</div>;
const ButtonDefault = props => <div className={css.btnDefault} {...props}>{props.children}</div>;
const ButtonSecondary = props => <div className={css.btnSecondary} {...props}>{props.children}</div>;
const ButtonTransparent = props => <div className={css.btnTransparent} {...props}>{props.children}</div>;

export {
  Container,
  LargeContainer,
  PageTitle,
  BlockTitle,
  Article,
  ButtonDefault,
  ButtonSecondary,
  ButtonTransparent
};