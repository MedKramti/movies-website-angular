import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() selectedFilter : string = "all";
  @Output() filter :EventEmitter<string> = new EventEmitter<string>(); 
  
  constructor() { }

  ngOnInit(): void {
    
  }

  filterChanged(filter:string){
    this.filter.emit(filter);
  }

}
