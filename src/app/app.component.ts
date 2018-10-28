import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NameValuePair } from './model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'movie-app';
    public languages: NameValuePair[] = [];
    public selectedLang: String;

    constructor(private translate: TranslateService) {
        translate.addLangs(['en-US', 'hu-HU']);
        translate.setDefaultLang('en-US');
        translate.use("en-US");

        this.languages = [{ name: "en", value: "en-US" }, { name: "hu", value: "hu-HU" }];
        this.selectedLang = translate.currentLang;
    }

    public changeLanguage(language): void {
        this.translate.use(language);
    }
}
