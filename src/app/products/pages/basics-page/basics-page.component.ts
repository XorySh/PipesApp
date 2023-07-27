import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'melchor';
  public nameUpper: string = 'MELCHOR';
  public fullName:  string = 'MelChOr DíAz ReYes';

  public customDate: Date = new Date();

}
