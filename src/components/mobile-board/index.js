import css from './style.scss';
import {phone} from '../../api/links';
import {nav} from '../../api/nav';
import Link from 'next/link';
import classNames from 'classnames';

class MobileBoard extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        {this.props.boardOpen && <div className={css.boardOverlay} onClick={this.props.handleClose} />}
        
        <div className={classNames(css.board, this.props.boardOpen && css.boardOpen)}>
          <div className={css.boardTop}>
          
            <div className={css.boardTopLogo}>
              <img src="/static/svg/logo.svg" alt=""/>
            </div>
          
            <a href={phone.link} className={css.boardTopPhone}>{phone.title}</a>
          </div>
        
          <div className={css.boardMenu}>
            {nav.map((item, index) => (
              <Link key={index} href={item.path}>
                <a className={css.boardMenuItem}>{item.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export {MobileBoard};