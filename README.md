Topic Graph Editor
==================

UI to edit topic graph. To get started, install following the directions below.

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

### Tasks:

See the full [master task list here](./tasks.md).

Next Milestone:

5/5/14

- [ ] Create Concept Form
    - [ ] Attributes
        - [ ] Bug: Loading autocomplete for GEO Coordinates
        - [ ] Bug: Categories model not binding
    - [ ] Forms (add/edit)
        - [ ] Ability to autocomplete a form's name field with existing forms from other concepts
        - [ ] Ability to choose not to autocomplete a form's name field
        - [x] Refactor model for first form to share same array as other forms (default form = concept name)
    - [ ] Forms (links)
        - [ ] For each added form, add it in a form field for link of form to concept
        - [ ] Include each field for each link of form to concept form field
    - [ ] Related Concepts
        - [ ] Search Capability
        - [ ] Autocomplete in form field
        - [ ] Move buttons to top. Can delete last related concept
    - [ ] General Refactor
        - [ ] Form "Model" regrouping
        - [ ] Separate Sections of Controllers for each partial form

___

### App Development

For development packages, we are using npm

* bower
* brfs
* gulp
    * browserify
    * browserify-shim
    * connect-livereload
    * debowerify
    * express
    * gulp-angular-templatecache
    * gulp-autoprefixer
    * gulp-concat
    * gulp-embedlr
    * gulp-filter
    * gulp-jshint
    * gulp-livereload
    * gulp-minify-css
    * gulp-rename
    * gulp-sass
    * gulp-util
    * jshint-stylish
    * main-bower-files
    * node-bourbon
    * tiny-lr
    * vinyl-source-stream
    * watchify

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

##### Testing Packages:

* karma
* jasmine

##### Bower Packages:

* angular-mocks

##### npm Packages:

* jasmine-core
* karma
* karma-jasmine
* karma-phantomjs-launcher
* karma-spec-reporter
* gulp-jasmine
* gulp-karma

##### Load Tests

```shell
# Main Folder
gulp karma
```

#### E2E Testing

Testing Packages:

* protractor
* selenium
* cucumber
* chai
* chai-as-expected
* gulp-protractor

npm Packages:

```shell
# Main Folder
# Run Server
gulp server
# Another terminal window
gulp protractor
```

___

#### Production

For 3rd party libraries, we are using bower for package management

* angular
* lodash
* angular-ui-router
* jQuery
* chance
* jquery.tagsinput
* d3

___

### Requirements:

![Topic Graph Diagram](https://github.com/reverb/concepts-load/blob/master/topic_graph.png)

* User should be able to create, read, update, and delete a concept or form
* When relating forms to concepts, there should be a way to give equal or custom weights to the forms
* Should show related concepts
* Should show related forms
* Should be able to add connections to related concepts
* Should be able to add forms to this concept after shown the related forms
* User should be able to search for other concepts or forms, and come back with their respective relations to other concepts and forms
    * e.g. Search Furious 7 should return forms such as "Fast and the Furious", "Fast and Furious", etc. as well as concepts such as "Vin Diesel", "Paul Walker", etc.
* Editor
    * Search for a Concept or Form and have the ability to edit its attributes, which as the same as the ones you see in Create
