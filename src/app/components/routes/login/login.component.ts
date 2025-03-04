import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { AppService } from '../../../services/app.service';
import { MessageService } from 'primeng/api';
import { AppProps } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule,CardModule,ToastModule],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  public footerTitle = signal<string>("Inicia sesión con tu cuenta de colaborador Active Directory");
  public bannerSrc = signal<string>(`/assets/img/${AppProps.bannerFile}`);
  public logoSrc = signal<string>(`/assets/logo/${AppProps.logoFile}`);

  public textLogin : string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptas animi, illum sed dolores commodi corporis inventore dolorum laudantium id, error, expedita minima natus omnis perspiciatis? Dolor est voluptas atque?"

  constructor(public appService: AppService) {
    if(this.appService.activeAccount()) {
      window.location.pathname = '/protected';
    };
  }
}
