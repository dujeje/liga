import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  loadingImg = "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";
  
  constructor() {}

  ngOnInit(): void {}
}
