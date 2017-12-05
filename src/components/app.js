import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as fw from "@ms-fw/fw-react";
import actionmenu from './actionmenu';
import dialog from './dialog';
import progress from './progress';
import table from './table';
import select from './select';
import alert from './alert';

import {
  HashRouter as Router,
  Route,
  Switch ,
  Link
} from 'react-router-dom'

export default class App extends Component {

  render() {

    var items = [
      {
        "actionTrigger": {
          "text": "Add",
          "glyph": "add"
        }
      }, {
        "actionTrigger": {
          "text": "Delete",
          "glyph": "delete"
        }
      }, {
        "actionTrigger": {
          "text": "Edit",
          "glyph": "edit"
        }
      }, {
        "actionTrigger": {
          "text": "Check",
          "glyph": "check-mark"
        }
      }, {
        "actionTrigger": {
          "text": "Cancel",
          "glyph": "cancel"
        }
      }
    ];

    var overflowItems = [
      {
        "actionTrigger": {
          "text": "Settings",
          "glyph": "settings"
        }
      }, {
        "actionTrigger": {
          "text": "Download",
          "glyph": "download"
        }
      }
    ];


    var britems = [
      {
          "href": "#",
          "text": "Getting started"
      },
      {
          "href": "#",
          "text": "Designing"
      },
      {
          "href": "#",
          "text": "Color"
      }
  ];
  
  
    return (
     
           <Router>
              <div>
              <fw.components.Breadcrumb
    items={ britems }
>
</fw.components.Breadcrumb>
        <fw.components.ActionBar items={items} overflowItems={overflowItems}></fw.components.ActionBar>
        <Switch>
            <Route exact path="/actionmenu" component={actionmenu} />
            <Route exact path="/dialog" component={dialog} />
            <Route exact path="/progress" component={progress} />
            <Route exact path="/table" component={table} />
            <Route exact path="/select" component={select} />
            <Route exact path="/alert" component={alert} />
        </Switch>
        </div>
        </Router>
      
    );
  }
}
