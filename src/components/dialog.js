import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as fw from "@ms-fw/fw-react"

export default class dialog extends Component {

  render() {

    var title = {
        "tag": "h2",
        "text": "Dialog title"
    };
    
    var primaryButton = {
        "text": "Close"
    };
    
    
    return (
      <div>        
    

<fw.components.Dialog
        id="dialog01"
        title={ title }
        textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut commodo ante. Integer mattis a ligula quis ullamcorper. Nam placerat quam sed nulla tristique mattis."
        primaryButton={ primaryButton }
        visible={true}
    >
    </fw.components.Dialog>
    

      </div>
    );
  }
}
