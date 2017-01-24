import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  private vastaus: any = {};
  private tyopaikat: any = [];

  constructor(private http: Http) { }

  private getJson() {
    this.http.get('tsconfig.json')
      .subscribe(
        (res: Response) => {
          const json = res.json();
          this.vastaus = json.compilerOptions;
          console.log(this.vastaus);
        }
      );
}

  private getApi() {
    this.http.get('http://gis.vantaa.fi/rest/tyopaikat/v1')
      .subscribe(
        (res: Response) => {
          this.tyopaikat = res.json();
          console.log(this.tyopaikat);
        }
      );
  }

  ngOnInit() {
    this.getJson();
    this.getApi();
  }

}
