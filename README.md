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
- [ ] Project Set-up
    - [x] .gitignore
    - [x] App Set-up
        - [x] npm installations
        - [x] gulp tasks
    - [x] Library Set-up
        - [x] Bower installations
        - [x] .bowerrc
        - [x] Routing (UI Router)
        - [x] Sass
        - [x] Bourbon / Neat
    - [ ] Test Set-up
        - [ ] E2E w/ Selenium & Protractor
        - [x] Unit w/ Jasmine
        - [ ] JSLint
    - [x] Serve App With Gulp (better than `python -m SimpleHTTPServer`)
- [ ] Create Concept Form
    - [x] Concept Name
    - [x] Display Name
    - [x] Entity Type (?)
    - [ ] Search for Related Concepts
    - [ ] Field to add multiple related concepts
        - [x] field
        - [ ] addConcept()
        - [ ] Ability to autocomplete this field
    - [ ] Field to add multiple forms
        - [x] field
        - [ ] addForm()
        - [ ] Ability to autocomplete this field
        - [ ] Autofill first form to include the concept display name as a form
- [ ] Search Concept
    - [ ] Search Box
    - [ ] View Concept attributes
        - [ ] View associated forms
    - [ ] Options:
        - [ ] Edit
        - [ ] Delete
    - [ ] View Articles associated with concept
    - [ ] View Associated Concepts --> Graphical Visualization?
    - [ ] View forms of the associated concepts
- [ ] Edit Concept Form --> combine with Search Concept?
    - [ ] View A: Search
    - [ ] View B: Edit Form
        - [ ] Edit Concept Name
            - [ ] Include warning of the risk of changing a concept name can alter concept graph results (and we don't want this). Instead, divert their attention to Display Name
        - [ ] Change Display Name
        - [ ] Change Entity type (?)
        - [ ] Change existing related concepts
            - [ ] Options
                - [ ] add
                    - [ ] Ability to autocomplete this field
                - [ ] edit
                - [ ] delete
        - [ ] Field to add multiple forms
            - [ ] Options
                - [ ] add
                    - [ ] Ability to autocomplete this field
                - [ ] edit
                - [ ] delete
- [ ] Delete Concept --> This may not be a necessary feature
    - [ ] View A: Search
    - [ ] View B: Results with option to delete

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
    * gulp-livereload
    * gulp-minify-css
    * gulp-rename
    * gulp-sass
    * gulp-util
    * main-bower-files
    * node-bourbon
    * tiny-lr
    * vinyl-source-stream
    * watchify

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

npm Packages:

```shell
# Main Folder
gulp protractor
```

___

#### Production

For 3rd party libraries, we are using bower for package management

* angular
* lodash
* ui-router
* jQuery

___

### Requirements:

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
