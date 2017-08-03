import {Component, OnInit, ViewChild} from '@angular/core';
import {ITreeOptions, TreeComponent, TreeNode} from "angular-tree-component";
import {ContextMenuComponent, ContextMenuService} from "ngx-contextmenu";

import * as _ from "lodash";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})

export class SidenavComponent implements OnInit {

  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
  @ViewChild(TreeComponent) private tree: TreeComponent;

  inputHidden:boolean = true;

  inputs = {
    General: true,
    FieldSetup: true,
  };

  scienceGoals = [
    {
      name: 'General',
      children: []
    },
    {
      name: 'Field Setup',
      children: []
    },
    {
      name: 'Spectral Setup',
      children: []
    },
    {
      name: 'Calibration Setup',
      children: []
    },
    {
      name: 'Control and Performance',
      children: []
    },
    {
      name: 'Technical Justification',
      children: []
    }
  ];

  nodes = [
    {
      name: 'Project',
      isExpanded: true,
      children: [
        {
          name: 'Proposal',
          isExpanded: true,
          children: [
            {
              name: 'Planned Observing',
              isExpanded: true,
              children: [
                {
                  name: 'ScienceGoal',
                  isExpanded: true,
                  children: this.scienceGoals
                }
              ]
            }
          ]
        },

      ]
    }
  ];

  options: ITreeOptions = {
    getChildren: () => new Promise((resolve, reject) => {
    }),
    animateExpand: true
  };

  constructor(private contextMenuService: ContextMenuService) {
  }

  public onContextMenu($event: MouseEvent, item: any): void {
    this.contextMenuService.show.next({event: $event, item: item});
    $event.preventDefault();
  }

  ngOnInit() {
  }

  getIcon(node: TreeNode) {
    if (node.hasChildren)
      if (node.isExpanded)
        return 'glyphicon glyphicon-folder-open';
      else
        return 'glyphicon glyphicon-folder-close';
    else
      return 'glyphicon glyphicon-file';
  }

  add(node) {
    if (node) {
      console.log('Add to ' + node.data.name)
    } else {
      console.log('node undefined')
    }


    let newNode = {id: null, name: 'New Node', children: []};
    this.scienceGoals.push(newNode);
    this.tree.treeModel.update();
  }

  copy(node) {
    if (node) {
      console.log('Copy ' + node.data.name)
    } else {
      console.log('node undefined')
    }

    console.log(this.tree.treeModel.getNodeById(node.id));
  }

  remove(node) {
    if (node.hasChildren) {

    }
    _.remove(node.parent.data.children, node.data);
    this.tree.treeModel.update();
  }


  handleDblClick(node) {
    if (node.hasChildren) {
      node.toggleExpanded();
      node.toggleActivated();
    } else {
      this.rename(node)
    }
  }

  rename(node) {
    this.inputs[node.name] = !this.inputs[node.name];
    console.log(node.name, this.inputs[node.name]);
  }

  reshow(node){
    this.inputs[node.name] = !this.inputs[node.name];
  }

}
