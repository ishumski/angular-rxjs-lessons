import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count: number = 0
  isDisabled: boolean = false

  constructor() {}

  get cannotDecrese(): boolean {
    return this.count <= 0
  }

  incr(): void {
    this.count++
  }
  decr(): void {
    this.count--
  }
  toDefaultValue(): void {
    this.count = 0
  }

  ngOnInit(): void {}
}
