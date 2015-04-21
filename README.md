# Topic Graph Editor
====================

UI to edit topic graph

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
