# Angular CLI with Library support (1.2.7)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli). It is an extended version of a new app generated with ng new. It adds Library support for multiple apps in a mono-repo.

This starter is a result of many workarounds in order to make angular-cli work with a shared library of components/services/modules etc.

Currently supports: 

* Serving multiple apps at the same time
* Production build apps (AOT)
* Shared Library of components/modules ( can be used by each app )
* Shared assets folder and polyfills. ( can be used by each app )
* SCSS
* lazy loading of modules
* Custom commands to make your life easier
* and everything else you would normally could do with an app generated with ng new. 

Feel free to create an issue for a request or to fix something. 

Star and support this project if you like it, to help it stay alive and maybe even be added to angular-cli.

## Versioning

Versioning of this project will follow the same with Angular-cli. There will be a separate branch that will be working for each version (starting with 1.2.7)

## Commands

#### Development server

Run `npm run app1` to serve app1. Run `npm run app2` to serve app2 etc. Names can change if you want (package.json). You can have multiple apps running in your browser as each app is launched on a different port. Navigate to `http://localhost:4200/` or `http://localhost:4201/` for example. Each app will automatically reload if you change any of the source files.

#### Build

Run `npm run app1:build` to build app1. Run `npm run app2:build` to build app2 etc. The build artifacts will be stored in the `dist/app1` or `dist/app2` directory. All builds are for production ( --prod ).

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Running unit tests

Command not added yet.

#### Running end-to-end tests

Command not added yet.

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
