import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `<div><h1>{{getpageTitle()}}</h1>
  <pm-products></pm-products>
</div>`
})

export class AppComponent {
  getpageTitle = () => 'Acme Product Management';
}
