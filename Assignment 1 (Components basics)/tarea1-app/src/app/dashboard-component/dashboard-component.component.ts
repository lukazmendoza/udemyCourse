import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html', //IDK how to rename
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent   {

  loadState = 'loading';

  onSwitchState(){
    this.loadState = 'Finished';
  }


}
