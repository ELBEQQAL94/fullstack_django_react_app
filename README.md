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

## Back End: Django

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

## Front End: Reactjs

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
  - [ ] ADD LEAD
  - [ ] UPDATE LEAD
* [x] Add loader css in webpack config file
* [ ] Add editor for create message
* [ ] Add search leads form
* [ ] Add seprate component to add, update leader

- [ ] Setup eslint

## Submitions

## Deployment

## Screnn Shoots

## Tech I Used

- Django
- django-rest-framework
- django-rest-knox
- webpack
- babel
- reactjs
