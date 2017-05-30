import React, { Component, PropTypes } from 'react';
import PageSystem from '../pages/System';
import cx from 'classnames';

class CoreLayout extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
  }

  static defaultProps = {
    prefixCls: "antui-corelayout"
  }

  static childContextTypes = {
    page: PropTypes.object
  };

  /**
   * this.context.page.popup({uid, header, content, footer, navbar, force})
   */
  getChildContext () {
    return {
      page: {
        popup: (props) => { this.popupPage(props); },
      }
    };
  }

  popupPage (props) {
    this.refs['pageSystem'].popup(props);
  }

  render() {
    const { prefixCls, children, className, style } = this.props;
    const classes = cx(prefixCls, {
    }, className);
    return (
      <div className={`${prefixCls}-wrapper`} style={style}>
        <div className={classes}>
          {children}
        </div>
        <PageSystem ref="pageSystem" />
      </div>
    );
  }
}

export default CoreLayout;