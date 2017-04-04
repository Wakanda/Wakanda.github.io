---
layout: get-started-default
---

# Client-side: Bind your data in your web app via AngularJS

Wakanda's client connector Angular-Wakanda provides a full integration of backend project to frontend. 

Let's see how you can display the superheroes you generated in the built-in database to your web frontend.


## 1 - Access the AngularJS module's controller

As you can see in `web/index.html`, our blank template Angular1 application is contained in an AngularJS module called "Starter".

```html
<!DOCTYPE html>
<html class="no-js" ng-app="Starter">
</html>
```

This "Starter" module, is discribed in `web/app/app.js`. Our Wakanda's client connector is injected there. 

```javascript
angular.module('Starter', ['wakanda'])
```

Its controllers are in the folder `web/app/controllers`.


- Open its existing controller file `web/app/controllers/home.js`. That's where we're going to access the datastore.

A controller `HomeController`is already created in the template.
[$wakandaManager](https://wakanda.github.io/angular-wakanda/#/doc/api-reference/wakanda-manager) is a service provided by Wakanda. We're going to use it to access the datastore ds. (it's similar to the $http angular service)

## 2 - Access the data

In the controller under `,console.log('Angular-Wakanda is ready!');` add the following code :

```javascript
      ds.Superhero.$query({orderBy:"ID desc",pageSize:3}).$promise.then(function(response) {
         $scope.favoriteSuperheroes = response.result; 
       });
```
Here [$query()](https://wakanda.github.io/angular-wakanda/#/doc/api-reference/dataclass) is an Angular-Wakanda method for querying all the Superhero entities saved in the datastore. 

Here I used it to retrieve only the last 3 superheroes created through a promise.

`$scope.favoriteSuperheores = reponse.result` create a variable `favoriteSupereroes`in the app controller , and bind the server's response to it. [More info on $scope here](https://docs.angularjs.org/guide/scope)


## 3 - Display the data in your front

Open `web/index.html` and add the following code into the body to display the list

```html
  <div class="container" ng-controller="HomeController" >
           <p ng-repeat= "superhero in favoriteSuperheroes">Hello {{superhero.name}} !</p>
        </div>
```
<img src="../img/hww2-display-data-final.png" />

<div class="navigation-step">
  <a class="btn next-button" href="version-control.html">Next Step: Commit your mobile app <i class="icon-chevron-right"></i></a>
</div>
