import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { map } from 'rxjs/operators'
import { countSelector, decr, incr, toDefaultValue } from '../reducers/counter'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  isDisabled: boolean = false

  count$ = this.store.select(countSelector)
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0))

  constructor(private store: Store) {}

  incr(): void {
    this.store.dispatch(incr())
  }
  decr(): void {
    this.store.dispatch(decr())
  }
  toDefaultValue(): void {
    this.store.dispatch(toDefaultValue())
  }

  ngOnInit(): void {}
}
