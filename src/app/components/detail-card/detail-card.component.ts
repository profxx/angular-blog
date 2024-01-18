import { dataFake } from './../../data/dataFake';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit{

  @Input()
  isEnabled:boolean = false;
  @Input()
  photoCover:string = '';
  @Input()
  cardTitle:string = '';
  @Input()
  cardDetailText:string = '';

  private id:string | null = '0';

  constructor(
    private root:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.root.paramMap.subscribe(value=>
      this.id = value.get("id")
      );
      this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | number | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.cardTitle = result.title;
    this.photoCover = result.photoCover;
    this.cardDetailText = result.description;
  }

}
