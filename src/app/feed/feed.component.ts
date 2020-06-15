import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  tutorial = true;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  notSee(): void {
    this.tutorial = false;
  }

}
