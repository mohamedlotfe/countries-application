## Description
- ● A a small web application, displaying all available countries and their respective flags in a single page layout. ●
repo had the following:
- The application should require authentication, which must be implemented with the third-party provider Auth0, 
- The backend should fetch the country names and flag images (only URLs, no need to store files) from this API (https://restcountries.com/)
- serve them properly from the respective controller, using common ExpressJS as Backend.
- I used ReactJS layout or framework of your choice.
- the whole application should ideally be dockerised, for easier local development and deployments.


## The Architecture Design 

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://github.com/mohamedlotfe/nestjs-keycloak-auth/blob/main/public/flow.png"  alt="Nest Logo" /></a>
</p>

## Running using docker

```bash
# Run 
$ docker-compose up --build

```
# open 
[localhost](http://localhost:4200/)

## Running the app without docker

```bash
# backend
$ cd backend
$ npm install
$ npm run dev

# frontend
$ cd frontend
$ npm install
$ npm run start

```



## used libraries

- [ReactJs](https://legacy.reactjs.org/docs/introducing-jsx.html)
- [Expressjs](https://expressjs.com/)
- [docker compose](https://docs.docker.com/compose/gettingstarted/)

## License

Nest is [MIT licensed](LICENSE).
