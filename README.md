Topic Graph Editor
==================

UI to edit topic graph

### Installation:
```shell
npm install # May need sudo here
bower install
gulp dist
gulp serve
```

Open browser to `localhost:8080`.

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
        - [ ] Unit w/ Jasmine
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

### App Dependencies
#### Development

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

#### Production

For 3rd party libraries, we are using bower for package management

* angular
* lodash
* ui-router
* jQuery

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
