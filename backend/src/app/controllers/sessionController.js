const axios = require('axios').default;
const sessionConfig = require('../../config/sessionConfig');

const requestAuthorization = async (req, res) => {
  const redirectUrl = new URL(`${sessionConfig.baseUrl}/authorize`);
  redirectUrl.searchParams.append('client_id', sessionConfig.clientId);
  redirectUrl.searchParams.append('response_type', sessionConfig.responseType);
  redirectUrl.searchParams.append('redirect_uri', sessionConfig.redirectUri);
  redirectUrl.searchParams.append('state', sessionConfig.state);
  redirectUrl.searchParams.append('scope', sessionConfig.scope);

  res.redirect(redirectUrl);
};

const requestAccessToken = async (req, res) => {
  const { code } = req.query;

  const authBase64 = Buffer.from(
    `${sessionConfig.clientId}:${sessionConfig.clientSecret}`,
  ).toString('base64');

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', sessionConfig.redirectUri);

  try {
    const { data } = await axios.post(
      `${sessionConfig.baseUrl}/api/token`,
      params,
      {
        headers: {
          Authorization: `Basic ${authBase64}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    const homeUrl = new URL(sessionConfig.homeUri);

    res
      .cookie('refresh_token', data.refresh_token, {
        httpOnly: true,
      })
      .cookie('access_token', data.access_token, {
        expires: new Date(new Date().getTime() + data.expires_in * 1000),
      })
      .redirect(homeUrl);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { requestAuthorization, requestAccessToken };
