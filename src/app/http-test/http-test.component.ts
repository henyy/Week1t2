import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  private vastaus: any = {};
  private tapahtumat: any = {};

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
    this.http.get('http://api.teosto.fi/2015/')
      .subscribe(
        (res: Response) => {
          this.tapahtumat = res.json();
          console.log(this.tapahtumat);
        }
      );
  }

  ngOnInit() {
    this.getJson();
    this.getApi();
  }

}
