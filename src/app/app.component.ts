import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  dropdownList2 = [];
  selectedItems2 = [];
  dropdownSettings2 = {};
  ngOnInit() {
    this.getData(); // call service here
    this.getData2();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.dropdownSettings2 = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  getData(): void {
    let tmp = [];
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          tmp.push({ item_id: i, item_text: data[i].email });
        }
        this.dropdownList = tmp;
      });
  }
  getData2(): void {
    let tmp = [];
    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          tmp.push({ item_id: i, item_text: data[i].title });
        }
        this.dropdownList2 = tmp;
      });
  }
}
