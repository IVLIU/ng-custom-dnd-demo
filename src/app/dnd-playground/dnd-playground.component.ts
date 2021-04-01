import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dnd-playground',
  templateUrl: './dnd-playground.component.html',
  styleUrls: ['./dnd-playground.component.less']
})
export class DndPlaygroundComponent implements OnInit {
  // attributes
  public __DEBUG_DATA__: number[]
  public snapshot: number[]
  public targetIndex: number
  public currentIndex: number
  public prevIndex: number
  public translateStyle: Partial<CSSStyleDeclaration>
  // constructor
  constructor() {
    this.__DEBUG_DATA__ = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.snapshot = [...this.__DEBUG_DATA__]
    this.targetIndex = -1
    this.currentIndex = -1
    this.prevIndex = -1
    this.translateStyle = {}
  }
  // methods
  setSnapshot() {
    this.snapshot = [...this.__DEBUG_DATA__]
  }
  forceSet__DEBUG_DATA__() {
    const target = this.__DEBUG_DATA__[this.targetIndex]
    if(this.targetIndex > this.currentIndex) {
      this.__DEBUG_DATA__ = [
        ...this.__DEBUG_DATA__.slice(0, this.currentIndex),
        target,
        ...this.__DEBUG_DATA__.slice(this.currentIndex, this.targetIndex),
        ...this.__DEBUG_DATA__.slice(this.targetIndex + 1),
      ]
      return
    }
    this.__DEBUG_DATA__ = [
      ...this.__DEBUG_DATA__.slice(0, this.targetIndex),
      ...this.__DEBUG_DATA__.slice(this.targetIndex + 1, this.currentIndex + 1),
      target,
      ...this.__DEBUG_DATA__.slice(this.currentIndex + 1),
    ]
  }
  set__DEBUG_DATA__() {
    if(
      this.targetIndex === this.currentIndex || 
      this.currentIndex === this.prevIndex
    ) {
      return
    }
    this.forceSet__DEBUG_DATA__()
  }
  reset__DEBUG_DATA__() {
    this.__DEBUG_DATA__ = [...this.snapshot]
  }
  reset() {
    this.targetIndex = -1
    this.currentIndex = -1
    this.prevIndex = -1
  }
  drag(e: DragEvent) {
    // console.log('drag', e.target)
  }
  drop(e: DragEvent) {
    // console.log('drop', e.target)
  }
  dragstart(e: DragEvent) {
    this.targetIndex = +(e.target as HTMLDivElement).getAttribute('data-index')!
  }
  dragend(e: DragEvent) {
    this.forceSet__DEBUG_DATA__()
    this.setSnapshot()
    this.reset()
  }
  dragenter(e: DragEvent) {
    this.currentIndex = +(e.target as HTMLDivElement).getAttribute('data-index')!
    this.set__DEBUG_DATA__()
  }
  dragleave(e: DragEvent) {
    this.prevIndex = this.currentIndex
    this.reset__DEBUG_DATA__()
  }
  dragover(e: DragEvent) {
    // console.log('over', e.target)
  }
  dragexit(e: Event) {
    // console.log('exit', e.target)
  }
  // lifecycle
  ngOnInit() {

  }
}
