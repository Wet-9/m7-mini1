import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {
  songs: any;

constructor() { 

  this.songs = [
    ["Clarity"],
    ["Kill Bill"],
    ["ABC's"],
    ["O Canada"],
    ["MELTDOWN"]
  ];

  }
  reordering(event: any): void {
    event.detail.complete(this.songs);
  }

  ngOnInit() {
  }

}

