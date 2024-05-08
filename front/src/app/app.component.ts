import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'reborn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
  title = 'Reborn';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('fr');
  }
}
