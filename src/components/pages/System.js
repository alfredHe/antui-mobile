import React, { Component } from 'react';
import Layout from '../layout';
import { Toast } from 'antd-mobile';
import Pages from './pages';
import cx from 'classnames';

export default class System extends Component {
  static propTypes = {

  };

  static defaultProps = {

  };

  state = {
    page: {}, // 页面
    current: null, // 当前显示哪个页
    _uids: [],
    transition: "sfr",
    hide: true,
  }

  popup = (options) => {
    const {uid, navbar, force, ...otherProps} = options;
    let { page, _uids } = this.state;
    let _navbar = {
      leftContent: '返回',
      onLeftClick: this.prevPopup,
      ...navbar
    };
    if (!uid || !options) throw new Error("uid & options 不能为空");

    if (page[uid]) {
      if (force) { // 替换已有
        page[uid] = {navbar: _navbar, ...otherProps};
        _uids = page._uids.filter(_uid => _uid !== uid);
        _uids.push(uid);
      } else {
        Toast.fail("uid: " + uid + "已存在");
        return;
      }
    } else {
      page[uid] = {navbar: _navbar, ...otherProps};
      _uids.push(uid);
    }

    this.setState({
      page,
      current: uid,
      _uids,
      transition: "rfl",
      hide: false
    });
  }

  prevPopup = () => {
    let {current, _uids, page} = this.state;
    if (current) {
      delete page[current];
      _uids.pop();
      this.setState({
        page,
        current: _uids.slice(-1)[0],
        _uids,
        transition: "rfr",
      });
      
      if (_uids.length === 0) {
        setTimeout(_ => this.setState({hide: true}), 400);
      }
    }
  }

  close = (uid) => {

  }

  closeAll = () => {

  }

  render() {
    const { page, transition, hide } = this.state;

    let pageList = Object.keys(page);
    const classes = cx({
      hide
    });

    return (
      <Layout.Transition 
        transition={transition} 
        className={classes}
      >
        {pageList.map((uid, i) => {
          return <Pages
            key={"page-" + uid}
            {...page[uid]} />;
        })}
      </Layout.Transition>
    );
  }
}