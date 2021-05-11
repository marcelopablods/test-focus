import { Component, OnInit } from '@angular/core';
import { FocusService } from 'src/app/_service/focus.service';

@Component({
  selector: 'app-success-screen',
  templateUrl: './success-screen.component.html',
  styleUrls: ['./success-screen.component.css']
})
export class SuccessScreenComponent implements OnInit {
  data: any;

  constructor(private apiFocus: FocusService) { }

  ngOnInit(): void {
    this.data = this.apiFocus.postData();
    console.log(this.data)
  }

}
