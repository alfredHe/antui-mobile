import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import './start.less';

class Start extends Component {
  static propTypes = {
    langs: PropTypes.object,
  }

  render() {
    const { langs } = this.props;
    const lang = langs['start'];
    return (
      <div className="start">
        <div className="start-banner" ref="container">
          <h2>AntUI Mobile</h2>
          <p className="desc">{lang.bannerHeading}</p>
        </div>
        <div className="start-box-announcement">
          <p>
            {lang.annc}
          </p>
        </div>
        <div className="start-box-features">
          <div className="start-box-features-inner">
            <div className="row clearfix">
              <div className="item">
                <Link to="/docs/2/articles/0" className="start-box-features-item color-red">
                  <FontAwesome name="play-circle" size="4x" />
                  <p>{lang.getstart}</p>
                </Link>
              </div>
              <div className="item">
                <Link to="/docs/1/articles/0" className="start-box-features-item color-blue">
                  <FontAwesome name="th" size="4x" />
                  <p>{lang.component}</p>
                </Link>
              </div>
              <div className="item">
                <a href="https://github.com/weiq/antui-mobile" target="_blank" className="start-box-features-item color-og">
                  <FontAwesome name="github" size="4x" />
                  <p>{lang.github}</p>
                </a>
              </div>
              <div className="item">
                <a href="https://weiq.github.com/antui-mobile" target="_blank" className="start-box-features-item qrcode color-green">
                  <FontAwesome name="qrcode" size="4x" />
                  <p>{lang.qrcode}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="start-box-footer">
          <p>Inspired by <a href="https://ant.design/">ANT DESIGN</a></p>
        </div>
      </div>
    );
  }
}

export default Start;
