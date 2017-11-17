# Angular CLI with Library support (1.5)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli). It is an extended version of a new app generated with ng new. It adds Library support for multiple apps in a mono-repo.

This starter is a result of many workarounds in order to make angular-cli work with a shared library of components/services/modules etc.

Currently supports: 

* Library can be published and imported from npm registry (supports lazy loading and aot, Example2)
* Serving multiple apps at the same time
* Production build of multiple apps (with AOT)
* Shared Library of components/modules ( can be shared between each app with `@shared/` )
* Shared assets folder and polyfills. ( can be shared between each app )
* Shared SCSS. ( can be shared between each app )
* lazy loading of Shared modules
* Shared modules can lazy load other Shared modules ( with/without routes )
* Unit tests for each app
* E2E tests for each app
* Custom commands to make your life easier
* Universal Integration for multiple apps (need to install webpack for local serve `npm install -g webpack`)

and everything else you would normally be able to do with an app generated with ng new. 

Feel free to ask questions, provide feedback, submit ideas, requests or create an issue. 

Star and support this project if you like it, to help it stay alive and maybe even be added as a boilerplate/starter to angular-cli (e.x. ng new app-name --template library).

## Versioning

Versioning of this project will follow the same with Angular-cli. There will be a separate branch that will be working for each version (starting with 1.2.7)

## How to use this Starter

Just git clone this repo and start using it (run `npm install` after). The result would be the same if you had created a new app with Angular-CLI (ng new) having made all the necessary changes so that you can use multiple apps with a shared Library of components and have extra functionality.

## Examples

The repo also includes examples of some use cases to help you out:

0. AngularCLI: `AngularCLI` module is lazy loaded from the shared Libary (@shared) as a component/module of the default view/route.
1. Example1: In example 1 `Example1` module is lazy loaded from the shared Libary (@shared) as a view/route.
2. Example2: In example 2, the lazy loaded shared module `Example1` lazy loads another shared module `Example2`. Also `AngularCLI` module is lazily loaded and imported from the angular-cli-library (npm registry)

## Commands

#### Development server

* Run `npm run app1` to serve app1 (runs `ng serve --app app1 --port 4200`)
* Run `npm run app2` to serve app2 etc. (runs `ng serve --app app2 --port 4201`) 

Names can change if you want (package.json). You can have multiple apps running in your browser as each app is launched on a different port. Navigate to `http://localhost:4200/` or `http://localhost:4201/` for example. Each app will automatically reload if you change any of the source files (if you edit your shared library both apps will reload if they are using it).

#### Library

* Run `npm run library:publish` to publish your library to npm registry. It is the same as running `npm publish` in `src/shared` folder.

#### Build

* Run `npm run app1:build` to build app1. (runs `ng build --app app1 --prod --build-optimizer`) 
* Run `npm run app2:build` to build app2 etc. (runs `ng build --app app2 --prod --build-optimizer`) 

The build artifacts will be stored in the `dist/app1` or `dist/app2` directory. All builds are for production ( --prod ).

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. To add a component to app1 specify app.module as in the following example: `ng g component default --module ../app.module.ts`. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Running unit tests

* Run `npm run app1:test` to run *.spec.ts tests in app1 folder. (runs `ng test --app app1`)  
* Run `npm run app2:test` to run *.spec.ts tests in app2 folder. (runs `ng test --app app2`)

#### Running end-to-end tests

* Run `npm run app1:e2e` to run e2e tests from e2e/app1 folder. (runs `ng e2e --app app1`)  
* Run `npm run app2:e2e` to run e2e tests from e2e/app2 folder. (runs `ng e2e --app app2`)

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
