import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lit-footer',
  templateUrl: './lit-footer.component.html',
  styleUrls: ['./lit-footer.component.scss']
})
export class LitFooterComponent implements OnInit {

  private DESIGN_LINK: String = "https://www.figma.com/proto/iSp7IvOoY7UHHB8kxrkh4t/LitGames?page-id=1%3A2&node-id=94%3A11&viewport=71%2C140%2C0.47&scaling=scale-down&starting-point-node-id=94%3A11&show-proto-sidebar=1";
  
  constructor() { }

  ngOnInit(): void {
  }

  public getDesignLink(): String {
    return this.DESIGN_LINK;
  }

}
