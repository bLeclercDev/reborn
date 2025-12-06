import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'reborn-header',
    imports: [TranslateModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush
    //todo: rule eslint detection onpush
    //todo: rule eslint standalone true
})
export class HeaderComponent {

}
