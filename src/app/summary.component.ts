import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  
  @Input() parentData:number;
  
  items:any[];
  batting:any[];
  bowling:any[];
  final:any[];
  _url:string;
  finals:any[];
  bowlheader:any[];
  batheader:any[];
  constructor(private http:HttpClient) {
    this.items=[];
    this.batting=[];
    this.bowling=[];
    this.bowlheader=["BOWLER","||OVERS","||ECONOMY"];
    this.batheader=["BATSMAN","||RUNS","||BALLS"];
    this.finals=[];
    this.final=[];
    this._url='';
    this.parentData=0;
   }
   ngOnInit(): void {
    console.log(this.parentData.toString());
     this._url="https://cricapi.com/api/fantasySummary?apikey=SayK3Sjc3YYBSh9myxV1h4dbtA52&unique_id="+this.parentData.toString();
     console.log(this._url);
     //this._url="https://cricapi.com/api/fantasySummary?apikey=3M8wZDj2OjV2PLDWtm6JhB9YjG93&unique_id=1226941";
    this.http
    .get(this._url)
    .toPromise()
    .then((data :any) => {
      console.log(data);
      for(var name in data) {
        if(typeof data[name] == 'object'){
            this.items.push(data[name]);
        }
      }
      console.log(this.items[0]);
      for(var name in this.items[0]){
        if(name==='batting')
        {
          this.batting.push(this.items[0]['batting'][0]['scores']);
        }
        if(name==='bowling')
        {
          this.bowling.push(this.items[0]['bowling'][0]['scores']);
        }
      } 
      for(var i in this.batting){
        this.final.push(this.batting[i]);
      } 
      for(var d in this.final){
        this.finals.push(this.final[d]);
      }       
      console.log(this.finals);
      console.log(this.batting);
      console.log(this.bowling);
     
    });

  }

}
