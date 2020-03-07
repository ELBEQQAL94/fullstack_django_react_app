### About The App

Create FullStack App using Django for backend and Reactjs for backend
This app it's a dashboard for create, update, delete, get all leaders.

### Setup Project

## run front end

```sh
yarn dev
yarn build

```

## run server

- ./ leadmanger

```sh
pipenv shell
python manage.py runserver
```

### TODO:

### Back End: Django

## Setup Server

- [x] Install pipenv
- [x] Create virtuall env
- [x] Install django
- [x] Install djangorestframework for web API
- [x] Install django-rest-knox for auth
- [x] Setup django project
- [x] Create django app
- [x] Add app into settings.py
- [x] Create model
  - first name
  - last name
  - experience
  - sallary
  - on work or not
  - time of work
  - role: user or admin
  - email
  - avatar
- [x] Make migration to the app
  - python manage.py makemigrations leads
- [x] Add model to database
  - python manage.py migrate
- [x] Create serializer using:
  - rest-framework
- [x] Create API's
  - api.py
    - GET all leads
    - UPDATE lead
    - ADD lead
    - DELETE lead
- [x] Create Urls
  - urls.py
- [ ] Emigrate DataBase from sqlite3 to MySQL
- [ ] Test App

## Authentication & Authorization

- [x] Add owner to our Lead model
- [x] Create migration for updated our model
  - python manage.py makemigrations
  - python manage.py migrate
- [x] Add knox and REST_FRAMEWORK in settings.py file
- [x] Migrate Authentication
  - python manage.py migrate
- [x] Create accounts app for manage users
  - python manage.py startapp accounst
- [x] Add accounts app to seetings.py
- [x] Create Serializer inside accounts app
- [x] REGISTER USER
  - [x] Validate name
    - [x] if name is empty or not valid display errors
  - [x] Validate email
    - [ ] if email not unique or not valid display errors
  - [x] Validate password
    - [x] if password not valid or less than 6 length display errors
    - [ ] if not hashed password before send it to database
  - [x] POST Request to /auth/register for logged user
- [x] LOGIN USER
- [x] Validate name
  - [x] if name is empty or not valid display errors
  - [x] Validate email
    - [x] if email not correct or not valid display errors
  - [x] Validate password
    - [ ] if password not correct or less than 6 length display errors
    - [x] compare password within database
    - [x] if something wrong display errors if not
  - [x] POST Request to /auth/login for register user

## Permissions

## Administaration

### Front End: Reactjs

- [x] setup project
  - python manage.py startapp frontend
- [x] Install webpack and webpack-cli
- [x] Install babel
- [x] Install react
- [x] Create config babel file
- [x] Create webpack config file
- [x] Add scripts:
  - dev
  - build
- [x] Create index.js
- [x] Create App.js
- [x] Create index.html
- [x] Add bootstrap
- [x] Add frontend app to settings.py
- [x] Add our index to views.py
- [x] Add urls
- [x] Add urls into main file (leadmanager)
- [x] Implement redux
  - redux
  - react-redux
  - redux-thunk
  - redux-devtools

* [x] Create store
  - Leads
* [x] Create types for actions and reducers
  - [x] GET_LEADS
  - [x] DELETE_LEADS
  - [x] ADD_LEAD
  - [x] UPDATE_LEAD
* [x] Create reducers
  - LeadsReducer
* [ ] Create actions
  - [x] GET LEADS
  - [x] DELETE LEADS
  - [x] ADD LEAD
  - [ ] UPDATE LEAD
* [ ] Allow Manager to add lead
  - [x] Install react-hook-form for validation
  - [x] Create Form
    - [x] validate name
      - [x] display error if name is emprty or not valid or the length is longer
    - [x] validate email
      - [x] display error if name is emprty or not valid or the length is longer
    - [x] message (optional)
      - User can leave message empty if he/here wants
* [x] Create message components for tell user if delete lead or add lead
  - [x] Add type with CREATE_MESSAGE
  - [x] Create messages reducer
  - [x] Create action for create message
* [x] Add react-router-dom
  - [x] Install react-router-dom
  - [x] Add Routers component
  - [x] Add Custom Link
* [x] Add Not Found Page
* [x] Add loader css in webpack config file
* [x] Create REGISTER Page
  - [x] Add regsiter in header
  - [x] Create Form for register user
    - [x] username Form
      - [x] validate username and display errors
    - [x] email Form
      - [x] validate email and display errors
    - [x] password Form
      - [x] validate password and display errors
    - [x] POST Request for register new USER
  - [x] Redirect User to Leads view
* [x] Create LOGIN Page
  - [x] Add login in header
  - [x] Create Form for login user
    - [x] username Form
      - [x] validate username and display errors
    - [x] password Form
      - [x] validate password and display errors
    - [x] POST Request for register new USER
  - [x] Redirect User to Leads view
* [ ] Reducer
  - [x] LOGIN USER
  - [ ] REGISTER USER
  - [x] LOGOUT USER
* [ ] Actions
  - [ ] registerUser
  - [x] loginUser
  - [x] logoutUser
* [x] Types

  - REGISTER_ACCOUNT
  - LOGIN_ACCOUNT
  - LOGOUT_USER
  - USER_LOADING
  - USER_LOADED
  - AUTH_ERROR
  - LOGIN_SUCCESS
  - LOGIN_FAIL

* [x] Add public routes for LOGIN and REGISTER USER
* [x] Add private routes for Leads and Add Leads
* [ ] Add search leads form
* [ ] Add seprate component to add, update leader
* [ ] Add .env file for protect server routes
* [ ] Add profile to show user info
* [ ] Clear our the redux state for leads when logging out.
* [ ] If im logged in and refresh the page it takes me back to the login page even though I can see my token in redux.

- [ ] Setup eslint

### Description Folders and Files Of The Project

### Submitions

### Deployment

### Screnn Shoots

### Tech I Used

- Django
- django-rest-framework
- django-rest-knox
- webpack
- babel
- reactjs
