import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as fw from "@ms-fw/fw-react"

export default class alert extends Component {

  render() {

    var closeButton = {
      "text": "Close alert"
  };
  
  var actions = [
      {
          "href": "#",
          "text": "Link to action"
      },
      {
          "href": "#",
          "text": "Link to action"
      }
  ];
  
    
    return (
      <div>        
    <fw.components.Alert
    alertType="information"
    message="Alert message."
    closeButton={ closeButton }
    icon="info"
    iconAriaLabel="Information message"
    actions={ actions }
>
</fw.components.Alert>


<fw.components.Alert
        alertType="warning"
    message="Alert message."
    closeButton={ closeButton }
    icon="info"
    iconAriaLabel="Information message"
    actions={ actions }
>
</fw.components.Alert>

<fw.components.Alert
        alertType="error"
    message="Alert message."
    closeButton={ closeButton }
    icon="info"
    iconAriaLabel="Information message"
    actions={ actions }
>
</fw.components.Alert>



      </div>
    );
  }
}
