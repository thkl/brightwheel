/**
 * brightwheel
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 /** @jsx etch.dom */

import etch from 'etch';
import classNames from 'classnames';
import BrightwheelComponent from './brightwheel-component';

class Select extends BrightwheelComponent {

  render() {
    let classes = classNames(
      'form-control',
      this.properties.classNames
    );
    
    return (
      <select {...this.properties.attributes} className={classes}>
        {this.children.map(function(child) {
          return <option>{child}</option>
        })}
      </select>
    );
  }

}

export default Select;
