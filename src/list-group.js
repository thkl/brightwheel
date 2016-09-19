/**
 * breit-wheeler
 *
 * Copyright © 2016 Allen Smith &lt;loranallensmith@github.com&gt;. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

 /** @jsx etch.dom */

import etch from 'etch';
import classNames from 'classnames';
import EtchComponent from './etch-component';

class ListGroup extends EtchComponent {

  render() {
    let classes = classNames(
      'list-group',
      this.properties.classNames
    );

    return (
      <ul {...this.properties.attributes} className={classes}>
        {this.children.map(function(child) {
          return child.render();
        })}
      </ul>);
  }

}

export default ListGroup;
