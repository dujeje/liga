import authConfig from '../../auth_config.json';

export const environment = {
    production: false,
    auth: {
        domain: authConfig.authConfig.domain,
        clientId: authConfig.authConfig.clientId,
    },
            redirectUri: window.location.origin
};
