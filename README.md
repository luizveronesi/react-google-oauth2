# React Google OAuth2 Login

React project with integrated Google OAuth2 login.

## Installation

```bash
# Clone the repository
git clone https://github.com/luizveronesi/react-google-oauth2.git

# Navigate to the project directory
cd react-google-oauth2

# Install dependencies
npm install
```

```bash
# Docker installation
docker build . -t react-google-oauth2:latest
docker create --name react-google-oauth2 --network your-network --ip x.x.x.x --restart unless-stopped roboto-node:latest
docker start react-google-oauth2
```

## Usage

```bash
# Run the application
npm start
```

|                Action |              URL               | Description                                                                                                                             |
| --------------------: | :----------------------------: | --------------------------------------------------------------------------------------------------------------------------------------- |
|               `Login` |     http://localhost:3000      | Displays login page with Google login button.                                                                                           |
|              `Logout` |  http://localhost:3000/logout  | Logout url. It is also triggered by the logout button.                                                                                  |
| `Login with redirect` | http://localhost:3000/redirect | Example Redirect url. It may be any url to which the user will be redirected after the login. Its route must be set at LoggedRoutes.tsx |

## Configuration

Add your Google Client ID at file environment/.env.localhost, replacing ${REACT_GOOGLE_KEY} with your client ID. You may also add it to your environment variables, as in the example.

Google Client ID may be found at https://console.cloud.google.com/, under section Credentials, topic OAuth 2.0 Client IDs.

## Demo

A demo may be found at: https://services.texugo.com.br/demo/react-google-oauth2/
