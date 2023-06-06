# ManageUsers API

> It contains Backend API for ManageUsers Appication to manage Users database.

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own.

## Install Dependencies

```
npm install
```

## Run App

```
# Run in development mode
npm run start:dev

# Run in production mode
npm run start:prod
```

## Database Seeder

To seed the database with users with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## Demo

The API is live at render [sunny8080-manage-users-api.onrender.com](https://sunny8080-manage-users-api.onrender.com/)

The API is live at aws [http://sunny8080-manage-users-api.ap-south-1.elasticbeanstalk.com/](http://sunny8080-manage-users-api.ap-south-1.elasticbeanstalk.com/)

Extensive documentation with examples on postman [Click Here](https://documenter.getpostman.com/view/19721099/2s93ebRVfe)

- Version: 1.0.0
- License: Sunny8080
- Author: Sunny Kumar
