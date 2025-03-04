import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Client, GraphError } from '@microsoft/microsoft-graph-client';
import { AditionalUserData } from '../app.interfaces';
import { ActiveDirectory } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  private graphClient: Client;

  constructor(private msalService: MsalService) {
    this.msalService.initialize();
    this.graphClient = Client.init({
      authProvider: async (done) => {
        const account = this.msalService.instance.getActiveAccount();
        if (account) {
          try {
            const response = await this.msalService.instance.acquireTokenSilent({
              account: account,
              scopes: ActiveDirectory.defaultScopes,
            });
            done(null, response.accessToken);
          } catch (error) {
            done(error, null);
          }
        }
      },
    });
  }

  async loadAditionalUserData(): Promise<AditionalUserData> {
    try {
      return await this.graphClient.api('/me?$select=displayName,givenName,surname,employeeId,mail,jobTitle,department,companyName,email').get();
    } catch (error: unknown) {
      if(error instanceof GraphError){
        switch (error.statusCode) {
          case 404:
            console.info("El usuario no cuenta con fotografía de perfíl.")
            break;
        
          case 403:
            console.warn("Debes solicitar el permiso necesario.")
            break;
          default:
            console.error("Error inesperado");
            break;
        }
      }
      throw error;
    }
  }
}
