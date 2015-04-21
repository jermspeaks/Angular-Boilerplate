Topic Graph Editor
==================

UI to edit topic graph

### Installation:
```shell
npm install # May need sudo here
bower install
gulp dist
cd dist
python -m HTTPSimpleServer 8080
```

Open browser to `localhost:8080`.

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
        - [ ] Bourbon / Neat
    - [ ] Test Set-up
        - [ ] E2E w/ Selenium & Protractor
        - [ ] Unit w/ Jasmine
- [ ] Create Concept Form
    - [ ] Concept Name
    - [ ] Display Name
    - [ ] Entity Type (?)
    - [ ] Search for Related Concepts
    - [ ] Field to add multiple related concepts
        - [ ] Ability to autocomplete this field
    - [ ] Field to add multiple forms
        - [ ] Ability to autocomplete this field
        - [ ] Autofill first form to include the concept display name as a form
- [ ] Edit Concept Form
    - [ ] Edit Concept Name
        - [ ] Include warning of the risk of changing a concept name can alter concept graph results (and we don't want this). Instead, divert their attention to Display Name
    - [ ] Change Display Name
    - [ ] Change Entity type (?)

### App Dependencies
#### Development
* gulp
    * brfs
    * browserify
    * browserify-shim
    * debowerify
    * gulp-angular-templatecache
    * gulp-concat
    * gulp-util
    * main-bower-files
    * vinyl-source-stream
    * watchify

#### Production
* angular
* lodash
* UI-router
