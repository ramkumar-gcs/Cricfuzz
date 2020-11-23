import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matchinfo',
  templateUrl: './matchinfo.component.html',
  styleUrls: ['./matchinfo.component.css']
})
export class MatchinfoComponent implements OnInit {
  
  @Input() parentData : number;

  public players:any=[];
  public item:any=[];
  public team1:string='';
  public team2:string='';
  public teamname:any=[];
  public playing1:any=[];
  public playing2:any=[];
  public _url='';

  constructor(private http:HttpClient) { 
    this.parentData=0;
     }

  ngOnInit(): void {
    console.log(this.parentData.toString());
    this._url="https://cricapi.com/api/fantasySquad?apikey=SayK3Sjc3YYBSh9myxV1h4dbtA52&unique_id="+this.parentData.toString();
    console.log(this._url);
    //this._url="https://cricapi.com/api/fantasySquad?apikey=3M8wZDj2OjV2PLDWtm6JhB9YjG93&unique_id=1226941";
    this.http.get(this._url)
              .toPromise()
              .then((data :any) => {
                console.log(data);
                for(var name in data) {
                  if(typeof data[name] == 'object'){
                    this.item.push(data[name]);
                  }
                }
                console.log(this.item[0][0]);
                for(var v in this.item[0])
                {
                  this.players.push(this.item[0][v]);
                }
                for(var t in this.players){
                  this.teamname.push(this.players[t]['name']);
                }
                this.team1=this.teamname[0];
                this.team2=this.teamname[1];
                console.log(this.team1);
                console.log(this.team2);
                this.playing1.push(this.players[0]['players']);
                this.playing2.push(this.players[1]['players']);
                console.log(this.playing1);
              });;
  }

}
