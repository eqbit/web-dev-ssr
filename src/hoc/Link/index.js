import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);
  let style = {};
  
  let className = child.props.className || '';
  if (router.pathname === props.href) {
    className = `${className} current`.trim();
    style = {
      color: '#4E00F7',
      fontWeight: 'bold'
    }
  }
  
  return <Link {...props}>{React.cloneElement(child, { className, style })}</Link>;
};

export default withRouter(ActiveLink);