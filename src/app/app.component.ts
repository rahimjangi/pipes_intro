import { Component } from '@angular/core';
// import { MileToKilometerPipe } from './mile-to-kilometer.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  datePipe = '';
  upperCasePipe = '';
  lowerCasePipe = '';
  currencyPipe = '';
  decimalPipe = '';
  percentPipe = '';
  jsonObj = {};
  mile:number=0;

  onNameChange(e:any) {
    this.datePipe = e.target.value;
  }

  getDatePipe(e:any) {
    this.datePipe = e.target.value;
  }
  getUpperCasePipe(e: any) {
    this.upperCasePipe = e.target.value;
  }
  getLowerCasePipe(e: any) {
    this.lowerCasePipe = e.target.value;
  }
  getCurrencyPipe(e: any) {
    this.currencyPipe = e.target.value;
  }
  getDecimalPipe(e: any) {
    this.decimalPipe = e.target.value;
  }
  getPercentPipe(e: any) {
    this.percentPipe = e.target.value;
  }
  getJson(e: any) {
    this.jsonObj= {
      first_name: "rahim",
      last_name: "jangi",
      age:39
    };
  }

  getMile(e: any) {
    this.mile = parseFloat(e.target.value);
  }
}
