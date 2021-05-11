import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FocusService } from 'src/app/_service/focus.service';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {

  list$: Observable<any>;
  list: any = [];
  loading: boolean;

  constructor(private apiFocus: FocusService) { }

  ngOnInit(): void {
    this.apiFocus.getDataList();
    this.list$ = this.apiFocus.list;
    this.loading = true;
    this.list$.subscribe((res: any) => {
      console.log(res);
      this.loading = false;
      this.list = res;
    })
  }

  getTotalMount() {
    return this.apiFocus.getTotalMount();
  }

  isValid() {
    return this.apiFocus.isValid();
  }

}
