import { Component } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

    displayData: string = '';

    constructor(private dataService: DataserviceService) { }

    ngOnInit() {
        this.dataService.data$.subscribe((data: string) => {
          this.displayData = data; // Update displayedData when data changes
          console.log('dididididididiididididididiididididiididi', this.displayData);
        });
    }
}
