const msal = require("@azure/msal-node");

const config = {
  auth: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.SECRET_ID,
    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`,
  },
};

//instead of bellow function we can make use of fetch Request
const obtainToken = async () => {
  const res = await fetch(`${auth.authority}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: {
      grant_type: "client_credentials",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      scope: "https://graph.microsoft.com/.default",
    },
  });

  const data = res.json();
  const { access_token } = data;
  const myToken = access_token;
};

const pca = new msal.PublicClientApplication(config);

const scopes = ["https://graph.microsoft.com/.default"];

const getToken = async () => {
  const tokenRequest = {
    scopes,
  };

  try {
    const response = await pca.acquireTokenByClientCredential(tokenRequest);
    return response.accessToken;
  } catch (error) {
    console.log(error);
  }
};

const accessToken = await getToken();

module.exports = getToken;
