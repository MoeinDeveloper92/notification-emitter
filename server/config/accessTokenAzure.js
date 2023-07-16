const msal = require("@azure/msal-node");

const config = {
  auth: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.SECRET_ID,
    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
  },
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
