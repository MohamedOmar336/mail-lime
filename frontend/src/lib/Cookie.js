export const GetCookies = ()=>{
    let cookie = document.cookie;
    let output = {};
    cookie.split(/\s*;\s*/).forEach((pair) => {
        let vals = pair.split(/\s*=\s*/);
        output[vals[0]] = vals.splice(1).join('=');
    });
    return output;
};

export const SetCookie = (key, value)=>{
    let now = new Date();
    let expiryDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()+7);
    document.cookie = `${key}=${value};expires=${expiryDate.toUTCString()};path=/`;
};

export const RemoveCookie = (key)=>{
    document.cookie = `${key}=none;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
};