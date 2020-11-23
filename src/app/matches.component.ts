import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { MatchserviceService } from '../matchservice.service';
import { Router } from '@angular/router';
import { MatchinfoComponent } from '../matchinfo/matchinfo.component';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  names :any= [];
  dates :any=[];
  items :any=[];
  test:any=[];
  _url:string='';
  constructor(private http: HttpClient ,private router:Router) {
  }
  ngOnInit(): void {
    this._url="https://cricapi.com/api/matches?apikey=SayK3Sjc3YYBSh9myxV1h4dbtA52";
    this.http
      .get(this._url)
      .toPromise()
      .then((data :any) => {
        console.log(data);
        for (var name in data) {
          if (typeof data[name] == 'object') {
            this.items.push(data[name]);
          }
        }
        console.log(this.items[0]);
        for (var name in this.items[0]) {
          this.names.push(this.items[0][name]);
        }
      });
  }


}
