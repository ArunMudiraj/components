import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as fw from "@ms-fw/fw-react"

export default class table extends Component {

  render() {

    var subcategories = [
        {
            "colspan": 1,
            "sortable": true,
            "numerical": true,
            "id": "sid9",
            "text": "Lorem ipsum"
        },
        {
            "colspan": 1,
            "sortable": true,
            "numerical": true,
            "id": "sid10",
            "text": "Lorem ipsum"
        },
        {
            "colspan": 1,
            "sortable": true,
            "numerical": true,
            "id": "sid11",
            "text": "Lorem ipsum"
        },
        {
            "colspan": 1,
            "sortable": true,
            "numerical": true,
            "id": "sid12",
            "text": "Lorem ipsum"
        }
    ];
    
    var rows = [
        {
            "cells": [
                {
                    "text": "0",
                    "numerical": true
                },
                {
                    "text": "1",
                    "numerical": true
                },
                {
                    "text": "2",
                    "numerical": true
                },
                {
                    "text": "3",
                    "numerical": true
                }
            ]
        },
        {
            "cells": [
                {
                    "text": "5",
                    "numerical": true
                },
                {
                    "text": "6",
                    "numerical": true
                },
                {
                    "text": "7",
                    "numerical": true
                },
                {
                    "text": "8",
                    "numerical": true
                }
            ]
        },
        {
            "cells": [
                {
                    "text": "9",
                    "numerical": true
                },
                {
                    "text": "10",
                    "numerical": true
                },
                {
                    "text": "11",
                    "numerical": true
                },
                {
                    "text": "12",
                    "numerical": true
                }
            ]
        },
        {
            "cells": [
                {
                    "text": "13",
                    "numerical": true
                },
                {
                    "text": "14",
                    "numerical": true
                },
                {
                    "text": "15",
                    "numerical": true
                },
                {
                    "text": "16",
                    "numerical": true
                }
            ]
        }
    ];
    
    
    return (
      <div>        
    


<fw.components.Table
    sortable={true}
    ascendingFormatter="Sorted by {0} - ascending"
    descendingFormatter="Sorted by {0} - descending"
    subcategories={ subcategories }
    rows={ rows }
>
</fw.components.Table>

      </div>
    );
  }
}
