import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {
  
  @Input() parentData:number;
  public stat:string='';
  public score:string='';
  public desc:string='';
  public res:any=[];
  public _url='';
  constructor(private http : HttpClient) {
    this.parentData=0;
   }

  ngOnInit(): void {
    console.log(this.parentData.toString());
    this._url="https://cricapi.com/api/cricketScore/?apikey=SayK3Sjc3YYBSh9myxV1h4dbtA52&unique_id="+this.parentData.toString();
    console.log(this._url);
    //this._url="https://cricapi.com/api/cricketScore/?apikey=3M8wZDj2OjV2PLDWtm6JhB9YjG93&unique_id=1226941";
    this.http
        .get(this._url)
        .toPromise()
        .then((data :any) =>{
          console.log(data);
          for(var name in data){
            //console.log(name);
            if(name === 'stat'){
              this.stat=`${data['stat']}`;
            }
            if(name === 'score'){
              this.score=`${data['score']}`
            }
            if(name === 'description'){
              this.desc=`${data['description']}`;
            }
          }
        });     
      
  }

}
