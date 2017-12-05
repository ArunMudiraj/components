import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as fw from "@ms-fw/fw-react"

export default class select extends Component {

  render() {

     
    var label = {
      "id": "labelId01",
      "text": "Choose state"
  };
  
  var options = [
      {
          "value": "washington",
          "text": "Washington",
          "selected": true
      },
      {
          "value": "oregon",
          "text": "Oregon"
      },
      {
          "value": "california",
          "text": "California"
      }
  ];
  
    return (
      <div>        
    
    <fw.components.Select
    id="id01"
    label={ label }
    options={ options }
    scroll={false}
    disabled={false}
    flex={false}
    required={false}
>
</fw.components.Select>
    
      </div>
    );
  }
}
