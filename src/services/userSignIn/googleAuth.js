export const handleGoogleLoginSuccess = (response) => {
    console.log('Google login successful!', response);
    const { access_token } = response;

    if (access_token) {
        fetchUserProfile(access_token); // Fetch user profile if access token is available
    } else {
        console.error('Access token not available.');
    }
};

const fetchUserProfile = async (accessToken) => {
    try {
        const response = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch user profile: ${response.statusText}`);
        }

        const userData = await response.json();
        console.log('User Data:', userData); // Logs the user's Google profile data
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};

export const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed!', error);
};
