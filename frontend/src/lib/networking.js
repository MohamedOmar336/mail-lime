const debug = true;
const stagingMode = true;

const stagingServerUrl = 'http://api-staging.mailime.com';
const debugServerUrl = stagingMode?stagingServerUrl:'http://127.0.0.1:8000';

const productionServerUrl = 'https://api.mailime.com';



export let GetServerUrl = ()=> { return (debug ? debugServerUrl : productionServerUrl); };

export let GetApiUrl = ()=> { return `${GetServerUrl()}/api` };

export let GetDataSourceLink = (dataSourceLink)=> {
    if(dataSourceLink === null) return '';
    else return `${GetServerUrl()}${dataSourceLink}`
};