import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kinder',
  templateUrl: './kinder.component.html',
  styleUrls: ['./kinder.component.css']
})
export class KinderComponent {

    @Input() item: string = ''; // decorate the property with @Input()
}
