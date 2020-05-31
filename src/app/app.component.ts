import { Component } from '@angular/core';
import { AppSettings } from './configs/settings.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Invite | ' + AppSettings.inicialesNovios;
  isApp = true;

  iniciales = AppSettings.inicialesNovios;
  configCeremonia = AppSettings.configCeremonia;
  configFiesta = AppSettings.configFiesta;

}
