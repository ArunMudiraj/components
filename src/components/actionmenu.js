import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as fw from "@ms-fw/fw-react"

export default class actionmenu extends Component {

  render() {

    var actionTrigger = {
        "text": "Actions"
    };
    
    var menu = {
        "items": [
            {
                "glyph": "cancel",
                "id": "id0101",
                "text": "Cancel"
            },
            {
                "glyph": "edit",
                "id": "id0102",
                "text": "Edit"
            },
            {
                "id": "id0103",
                "text": "More..."
            }
        ]
    };
    
    
    return (
      <div>        
        <fw.components.ActionMenu
    id="id01"
    actionTrigger={ actionTrigger }
    menu={ menu }
>
</fw.components.ActionMenu>
      </div>
    );
  }
}
