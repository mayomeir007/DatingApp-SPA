import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http';

@Component({
  selector: 'app-value',
  templateUrl: './Values.component.html',
  styleUrls: ['./Values.component.css']
})
export class ValuesComponent implements OnInit {
values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.GetValues();
  }

  GetValues() { 
    this.http.get('http://localhost:5000/api/values').subscribe(
      response => { this.values = response;} , 
      error => {console.log(error);});
  }
}
