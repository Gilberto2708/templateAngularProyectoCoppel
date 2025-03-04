import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { MsalService } from '@azure/msal-angular';
import { GraphService } from '../../../services/graph.service';
@Component({
  selector: 'app-protected',
  standalone: true,
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.scss'
})
export class ProtectedComponent implements OnInit {
  constructor(
    private appService: AppService,
    private msalService : MsalService,
  ) {}
  
  ngOnInit(): void {
    
    console.log(this.msalService.instance.getActiveAccount());
  }
 }
