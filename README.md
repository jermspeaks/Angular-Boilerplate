Angular Boilerplate
==================

Forked from another project, this is an Angular boilerplate. (v. 1.3.5)

___

### Local Development:

All development is in the `build` folder, and results are built in the `dist` folder.

Styles are served via the `build/stylesheets` with Sass. It is combined with the `Bourbon/Neat/Bitters` plugin. Go to the [Bourbon Docs](http://bourbon.io/) to see what mixins and features are available to use. `Bourbon` is the Sass mixin library, `Neat` is the grid library, and `Bitters` is the scaffolds, variables, and structure library.

You can watch the app via gulp with `gulp watch`, and make changes.

You can serve the app via gulp with `gulp serve` on the open a browser to `localhost:5000`.

You can autoload tests via gulp with `gulp autotest`, which updates every time a file is changed in the build.

For my own local environment, I have one terminal window serving `gulp watch`, another serving `gulp serve`, and another window for typical tasks like `git`. Errors I've noticed with `gulp watch` are that if there are changes to the `.scss` files that are incorrect, it will break the `gulp watch` build. This has been flagged as a task to do later.

___

### Installation:
```shell
npm install # May need sudo here
bower install
gulp dist
gulp serve
```

Open browser to `localhost:5000`.

___

### Packages

[Full package List](./packages.md).

Includes Development, Production, and Testing

### Project File Management

#### AngularJS

The Angular project is broken up in the `build/src` folder, as well as three important files:

* `build/index.js`
* `build/routes.js`
* `build/.templates.js`

The main project is build in the `index.js` file, so every Angular dependency goes here, including third party vendors. Configurations also go here, as well as every controller, service, and directive file.

##### Routes

In the `routes.js` file, you will find the pages broken up into one large object as well as the `$stateProvider`, which includes what the route paths and state names are.

##### Templates

This is built through a gulp task. Every change to a template file will automatically build and enter to the `.templates.js` file.

#### Sass/CSS

Styles are broken down in its own folder, `build/stylesheets`. This includes the `main.scss` file that imports everything else. Vendors go into its own folder, as well as the different pages. Also, reusable common components are placed in the `components.scss` file. They are all build by the `gulp styles` task and are watched in the `gulp watch` task. As said before, if you're utilizing `gulp watch`, there's an error that if you break the sass build, it will also quit out of the gulp task.

___

### App Testing

#### Unit Testing

##### Installation

```shell
npm install -g karma
npm install -g jasmine
# Skip these two steps if you ran the installation at the top
bower install # For Angular-mocks
npm install
```

##### Load Tests

```shell
# Main Folder
gulp karma
```

#### E2E Testing

Loading the tests:

```shell
# Main Folder
# Run Server
gulp server
# Another terminal window
gulp protractor
```
