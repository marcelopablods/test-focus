import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FocusService } from 'src/app/_service/focus.service';

@Component({
  selector: 'app-rectangle-item',
  templateUrl: './rectangle-item.component.html',
  styleUrls: ['./rectangle-item.component.css']
})
export class RectangleItemComponent implements OnInit {
  @Input() item: any;
  montoTotal: number = 0;
  toggle: boolean = false;
  showInput: boolean = false;
  inputControl: FormControl = new FormControl(0);
  constructor(private apiFocus: FocusService) {}

  ngOnInit(): void {
    this.inputControl.setValidators(Validators.max(this.item.saldoDisponible));
    this.inputControl.updateValueAndValidity();
    this.inputControl.valueChanges.subscribe(num => {
      if (num < 0) {
        this.inputControl.setValue(0);
        num = 0;
      }
      this.item.totalMount = num;
      this.item.isValid = this.item.totalMount > this.item.saldoDisponible ? false : true;
    })
  }

  retirarTodo(monto: number) {
    this.item.active = !this.item.active;
    this.item.totalMount = this.item.active ? this.item.totalMount + monto : this.item.totalMount - monto;
  }

  show(val: boolean) {
    this.showInput = val;
    this.item.active = val;
    this.item.totalMount = 0
  }

}
