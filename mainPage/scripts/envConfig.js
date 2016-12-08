var CONFIG = CONFIG || {};
var hostOrigin = location.protocol + '//' + location.host + '/';
// ------------ SSO config -----------
CONFIG.MyEnv = {
    app: 'WiFiSetupWizard',
    appTitle: 'WiFi Pro',
    apiHost: '',
    MSHost: 'https://dashboard.ccb.cloudwifi.com',
    myAppUrl: hostOrigin,
    BB_URL: 'https://canvas.ccb.cloudwifi.com/designcontent/app/',
    gaTrackingId: 'UA-59851482-5',
    enableGaTracking: false,
    mojoOneUrl: 'https://login.ccb.cloudwifi.com',
    company: 'comcast',
    helpSupportUrl: '',
    qsgHost: '',
    insightsUrl: 'https://insights.ccb.cloudwifi.com',
    showUpgradePopup:false,
    upgradeRunning:false
};
