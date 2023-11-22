import { Component, Input, SimpleChanges } from '@angular/core';
import { DataserviceService} from '../../service/dataservice.service';


@Component({
  selector: 'app-kinder',
  templateUrl: './kinder.component.html',
  styleUrls: ['./kinder.component.css']
})
export class KinderComponent {

    @Input() item: string = ''; // decorate the property with @Input()

    constructor(private dataService: DataserviceService) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['item']) {
            console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', changes['item'].currentValue);
            const newValue = changes['item'].currentValue;
            this.dataService.updateData(newValue); // Update the data in the service
        }
    }
}
