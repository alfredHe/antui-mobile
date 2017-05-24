import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';
import createReactClass from 'create-react-class';
import Blazy from 'blazy';

const defaultOptions = {
  selector: '.antui-image',
  success: (ele) => {
    console.log("success", ele);
    ele.classList.add("loaded");
  },
  error: (ele, msg) => {
    console.log("error", msg);
    if (msg === 'missing') {
      ele.classList.add("missing");
    } else if (msg === 'invalid') {
      ele.classList.add("invalid");
    }
  }
};

class ImageLoader extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    /**
     * 图片地址
     */
    src: PropTypes.string,
    alt: PropTypes.string,
  }

  render() {
    return null;
  }
}

const Image = (options = {}) => {
  let _blazy = null;

  return createReactClass({
    componentDidMount() {
      if (!_blazy) {
        _blazy = new Blazy({...defaultOptions, ...options});
        console.log("blazy mount");
      }
    },
    
    componentWillUnmount() {
      if (_blazy) {
        _blazy.destroy();
        _blazy = null;
        console.log("blazy unmount");
      }
    },

    render() {
      const { className, prefixCls, src, alt, ...otherProps } = this.props;
      const classes = classNames("antui-image", prefixCls, className);
      return (
        <img className={classes}
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          data-src={src}
          alt={alt}
          {...otherProps}
        />
      );
    }
  });
}

ImageLoader.Image = Image;

export default ImageLoader;