export const Production = false;
export const DebugMode = true;
export const ActiveDirectory = {
    auth: {
        clientId: '76fd8f63-21b1-4e37-bc6e-36b17d11082f',
        authority: 'https://login.microsoftonline.com/76d81621-b9a9-4786-bb8f-a2efa839eee2/oauth2/v2.0/authorize',
        redirectUri: 'http://localhost:4200', 
    },
    defaultScopes: ['user.read']
}
/* Credenciales Coppel
export const ActiveDirectory = {
    auth: {
        clientId: '1554dced-5444-4d84-8481-9199bb3f9960',
        authority: 'https://login.microsoftonline.com/76d81621-b9a9-4786-bb8f-a2efa839eee2/oauth2/v2.0/authorize',
        redirectUri: 'http://localhost:4200', 
    },
    defaultScopes: ['user.read']
}
*/
export const AppProps = {
    navType: "white",
    //navType: "blue",
    //navType: "white-1",
    //navType: "blue-1", 
    logoFile: "logo-coppel.svg",
    bannerFile: "banner.jpg",
    useLoginScreen: true,
    hideSidebarHeader: true,
}