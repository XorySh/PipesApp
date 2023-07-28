import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Melchor';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  public changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female'
  }

  //i18n Plural

  public clients: string[] = ['María','Pedro','Fernando','Lucía','Jaime','José','Laura','Eduardo'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  public deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Melchor',
    age: 25,
    address: 'Chiclana de la Frontera, Cádiz'
  };

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value)),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(()=> {
      resolve( 'Tenemos data en la promesa.' )
    }, 3500);
  })


}
