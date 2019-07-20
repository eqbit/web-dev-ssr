import css from './style.scss';
import classNames from 'classnames';

const Container = props => <div className={css.container}>{props.children}</div>;
const LargeContainer = props => <div className={css.largeContainer}>{props.children}</div>;

const PageTitle = props => <div className={css.pageTitle}>{props.children}</div>;
const BlockTitle = props => <div className={css.blockTitle}>{props.children}</div>;
const BlockSmallTitle = props => <div className={css.pageSmallTitle}>{props.children}</div>;

const Article = props => {
  if(typeof props.children === 'object') {
    return <div>{props.children}</div>
  } else {
    return <div className={css.pageText} dangerouslySetInnerHTML={{__html: props.children}}/>
  }
  
};

const ButtonDefault = props => <div className={css.btnDefault} {...props}>{props.children}</div>;
const ButtonDefaultFull = props => <div className={css.btnDefault} style={{width: '100%'}} {...props}>{props.children}</div>;
const ButtonSecondary = props => <div className={css.btnSecondary} {...props}>{props.children}</div>;
const ButtonTransparent = props => <div className={css.btnTransparent} {...props}>{props.children}</div>;

const Submit = props => (
  <button type='submit'
          className={classNames(css['btn' + props.buttonClass], props.disabled && css.btnDisabled)}
          disabled={props.disabled}
  >
    {props.children}
    </button>
);

export {
  Container,
  LargeContainer,
  PageTitle,
  BlockTitle,
  BlockSmallTitle,
  Article,
  ButtonDefault,
  ButtonSecondary,
  ButtonTransparent,
  ButtonDefaultFull,
  Submit
};