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
  ngOnInit() {
    this.getData(); // call service here

    this.dropdownSettings = {
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
          tmp.push({ item_id: i, item_text: data[i].name });
        }
        this.dropdownList = tmp;
      });
  }
}
