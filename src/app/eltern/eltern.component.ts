import { Component } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-eltern',
  templateUrl: './eltern.component.html',
  styleUrls: ['./eltern.component.css']
})
export class ElternComponent {

    currentItem = 'Television'

    displayData: string = '';

    constructor(private dataService: DataserviceService) { }
}
