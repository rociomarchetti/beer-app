
# Hoppy Hour 🍻🌟

Whether you're a seasoned beer enthusiast or a newcomer to the world of craft brews, Hoppy Hour makes it easy to find the perfect beer for your next Beer Party. With its intuitive search feature, you can quickly find information on your favorite beers and discover new brews that are sure to impress.

Deploy link: https://hoppy-hour.netlify.app/beers/list

![Hoppy Hour](https://user-images.githubusercontent.com/98389214/234912787-930e5c61-2b72-4f5e-b0e3-1be1c72de8ff.gif)

## 🎯 How does it work?

On the home page you will find a wide variety of beers. There in the list you can see a brief description of each beer, but you can also access more information via the "Learn more" button. It is also possible to search for a specific beer by entering its name in the search bar: if it exists, you will be redirected to the page with all the information related to it.

### ⚙️ Brief description of the project

This is a SPA project developed in Angular that has two views, the list view and the one focused on the beer information ( excluding the page not found view). 

Two modules have been created, one for handling common components and one for all the management of the displayed content. The latter, the "beers.module" has a service to centralize the API calls, and it also works to centralize the child routes.

This project uses Punk API to get all the beers information. It has the ngx-infinite-scroll package for scroll management. All the layout work was done with CSS by me, but one animation is from animista.net.

## 🔧Tech Stack

![Angular](https://img.shields.io/badge/-Angular-C62828?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3)


## Run Locally

Prerequisites (versions used):

Angular CLI: 15.2.6
Node: 18.15.0
Package Manager: npm 9.5.0
OS: win32 x64

Clone the project

```bash
  git clone https://github.com/rociomarchetti/beer-app.git
```
Install dependencies

```bash
  npm install
```

Serve the project

```bash
  ng serve
```
Open the project

```bash
  Open your browser and go to http://localhost:4200/
```

