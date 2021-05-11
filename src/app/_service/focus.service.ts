import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FocusService {

  private list$: BehaviorSubject<any> = new BehaviorSubject([]);
  public readonly list: Observable<any> = this.list$.asObservable();

  private totalMount: number = 0;
  // private amount: number = 0;

  constructor(private http: HttpClient) { }

  getDataList() {
    this.http.get(`http://localhost:3000/metas`)
    .subscribe((res: any) => {
      res.map(e => {
        e.totalMount = 0;
        e.active = false;
        e.isValid = true;
        return e;
      })
      setTimeout(() => {
        this.list$.next(res);
      }, 2000);
    })
  }

  getTotalMount(): number {
    const aux = this.list$.getValue();
    console.log(aux)
    this.totalMount = aux.reduce((acc, curr) => {
      return acc + curr.totalMount;
    }, 0);
    return this.totalMount;
  }

  isValid() {
    const aux = this.list$.getValue();
    return aux.every(e => e.isValid);
  }

  postData() {
    const data = {
      totalMount: this.totalMount,
      metas: this.list$.getValue()
    }
    return data;
  }
}
