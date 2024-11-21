import axios from 'axios';








export const onGoogleLoginSuccess = async (response) => {

    const fetchUserInfo = async (accessToken) => {
        const response = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    };

    try {
        const { code } = response; // Capture authorization code
        console.log(code, "this is the code");
        console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID);
        console.log(import.meta.env.VITE_GOOGLE_CLIENT_SECRET)

        // Exchange authorization code for tokens
        const tokensResponse = await axios.post('https://oauth2.googleapis.com/token', new URLSearchParams({
            code: code,
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
            redirect_uri: 'http://localhost:5173',
            grant_type: 'authorization_code'
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const { access_token, id_token, refresh_token } = tokensResponse.data;
        console.log('Tokens response:', tokensResponse.data);

        // Fetch user info using access_token
        const userInfo = await fetchUserInfo(access_token);
        const { name, email, picture } = userInfo;

        // Prepare user data including tokens and details
        const userData = {
            email: email,
            token: id_token,
            username: name
        };
        console.log('Sending data:', userData);

        // You need to handle sending this data to the backend (remove the json variable)
        // await sendGoogleAuthCode(userData, navigate);

    } catch (error) {
        console.error("Error occurred during Google login:", error);
        if (error.response) {
            console.error("Error response data:", error.response.data);
        }
    }
};

export const onGoogleLoginError = (error) => {
    console.error('Google login failed!', error);
};
