## Installation (1.0.0)

With [npm](http://npmjs.com/):

If React is not installed

```
npm install --save react react-dom
npm install --save antui-mobile
```

With React Installed

```
npm install --save antui-mobile --save
```

## Example

We have several examples on the documentation. Here is the first one to get you started:
```javascript
// app.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import using commonJS Module *Require Plugins
//import { Button } from 'antui-mobile'

//import Using ES6 syntax
import {Button} from 'antui-mobile';

//import styles
import 'antui-mobile/lib/antui-mobile.min.css';

class App extends Component {
  render() {
    return (
      <Button>hello antui</Button>
    );
  }
}

ReactDOM.render((
  <App/>
), document.getElementById('container'));

```
