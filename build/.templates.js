angular.module("topicGraphEditor").run(["$templateCache", function($templateCache) {$templateCache.put("concept/concept.delete.html","<header class=\"concept-header\">\n    <span>Delete a concept</span>\n</header>\n\n\n<p>FORM PENDING</p>\n");
$templateCache.put("concept/concept.html","<header id=\"main-header\">\n    <span><a ui-sref=\"concept\">Reverb Topic Graph Editor</a></span>\n</header>\n\n<div ui-view>\n    <section id=\"main-menu\">\n        <ul>\n            <li ng-repeat=\"edit in model.editors\">\n                <a ui-sref=\"{{edit.link}}\"><div class=\"main-menu-item\"><span>{{edit.displayName}}</span></div></a>\n            </li>\n        </ul>\n    </section>\n</div>\n");
$templateCache.put("concept/concept.new.html","<header class=\"concept-header\">\n    <span>Create a new concept</span>\n</header>\n\n<section>\n    <form name=\"conceptNewForm\" ng-submit=\"submitNewConcept(conceptNewForm.$valid)\" novalidate>\n        <fieldset class=\"conceptNewForm\">\n\n            <div class=\"field\">\n                <label for=\"conceptName\">Concept Name</label>\n                <input\n                    name=\"conceptName\"\n                    type=\"text\"\n                    id=\"conceptName\"\n                    placeholder=\"Enter a concept name\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <!-- <div ng-messages=\"conceptNewForm.conceptName.$error\" ng-if=\"conceptNewForm.conceptName.$dirty\">\n                    <small ng-message=\"required\" class=\"error\">A concept name is required.</small>\n                </div> -->\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"DisplayName\">Concept Display Name</label>\n                <input\n                    name=\"DisplayName\"\n                    type=\"text\"\n                    id=\"DisplayName\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.displayName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n            </div> <!-- /.field -->\n\n            <div class=\"field related-forms\" data-ng-repeat=\"associatedform in form.associatedForms\">\n                <label for=\"associatedform\" ng-show=\"$first\">Associated Forms</label>\n                <!-- <section>\n                    <span>Last entry for the form is always the same as the concept name. Disabled for editing.</span>\n                </section> -->\n                <input type=\"text\"\n                    class=\"related-forms-item\"\n                    ng-model=\"associatedform.name\"\n                    name=\"associatedForm\"\n                    placeholder=\"Enter a form\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required>\n                <button class=\"delete-button\" type=\"button\" type=\"value\" ng-click=\"deleteForm(associatedform)\">-</button>\n            </div> <!-- /.field -->\n\n            <div class=\"field related-forms\"> <!-- The default form is the concept name. TODO include an extra field to start with an additional form -->\n                <label for=\"associatedform\" ng-show=\"form.associatedForms.length === 0\">Associated Forms</label>\n                <input\n                    class=\"related-forms-item\"\n                    name=\"relatedForms\"\n                    type=\"text\"\n                    id=\"relatedForms\"\n                    placeholder=\"Disabled: same as concept name\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                    disabled\n                />\n                <button type=\"button\" ng-click=\"addForm()\">+</button> <!-- TODO ng-click=\"addForm()\" -->\n            </div> <!-- /.field -->\n\n            <div class=\"field related-concepts\" data-ng-repeat=\"relatedConcept in form.relatedConcepts\">\n                <label for=\"relatedConcept\" ng-show=\"$first\">Related Concepts</label>\n                <input type=\"text\"\n                    class=\"related-concepts-item\"\n                    ng-model=\"relatedConcept.name\"\n                    name=\"relatedConcept\"\n                    placeholder=\"Enter the concept display name\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required>\n                <button class=\"delete-button\" type=\"button\" type=\"value\" ng-show=\"!$last\" ng-click=\"deleteConcept(relatedConcept)\">-</button>\n                <button type=\"button\" type=\"value\" ng-show=\"$last\" ng-click=\"addConcept(relatedConcept)\">+</button>\n            </div> <!-- /.field -->\n\n            <!-- <div class=\"field related-concepts\">\n                <label for=\"RelatedConcepts\">Related Concepts</label>\n                <input\n                    class=\"related-concepts-item\"\n                    name=\"RelatedConcepts\"\n                    type=\"text\"\n                    id=\"RelatedConcepts\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.relatedConcepts\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <button>+</button>\n            </div> -->\n\n            <div class=\"field\">\n                <label for=\"select\">Entity Type</label>\n                <select class=\"global-date-selector custom\"\n                    ng-model=\"form.entity\"\n                    ng-options=\"entityType.name for entityType in supportedEntities\"\n                    required\n                    ></select>\n            </div>\n\n            <div class=\"button-bar group\">\n\n                <div class=\"small-6\">\n                    <div class=\"row\">\n                        <div class=\"large-3 medium-5 columns\">\n                            <input\n                                id=\"btn-submit\"\n                                type=\"submit\"\n                                value=\"Submit\"\n                                ng-disabled=\"conceptNewForm.$invalid\"\n                                class=\"button\"\n                            >\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </fieldset>\n    </form>\n</section>\n");
$templateCache.put("concept/concept.search.html","<header class=\"concept-header\">\n    <span>Search for a concept</span>\n</header>\n\n<section class=\"concept-search-bar\">\n  <form name=\"conceptSearchForm\" class=\"search-bar\" role=\"search\" ng-submit=\"search(conceptSearchForm.$valid)\" novalidate>\n    <input type=\"search\" placeholder=\"Enter Search\" ng-model=\"searchQuery\" required/>\n    <button class=\"search-submit\" type=\"submit\">\n      <img src=\"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/search-icon.png\" alt=\"Search Icon\">\n    </button>\n  </form>\n</section>\n\n<section>\n  <div ui-view></div>\n</section>\n");
$templateCache.put("concept/concept.search.list.html","<header class=\"concept-header\">\n    <span>Search Results</span>\n</header>\n\n<table class=\"tables\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Options</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"concept in model.searchList\">\n      <td>{{concept.name}}</td>\n      <td><button ng-click=\"viewConcept(concept.id)\">View</button><button ng-click=\"editConcept(concept.id)\">Edit</button><button ng-click=\"deleteConcept(concept.id)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n");
$templateCache.put("concept/concept.update.html","<header class=\"concept-header\">\n    <span>Update for a concept</span>\n</header>\n\n<section>\n    <form name=\"conceptEditForm\" ng-submit=\"submitNewConcept(conceptEditForm.$valid)\" novalidate>\n        <fieldset class=\"conceptEditForm\">\n\n            <div class=\"field\">\n                <label for=\"conceptName\">Concept Name</label>\n                <input\n                    name=\"conceptName\"\n                    type=\"text\"\n                    id=\"conceptName\"\n                    placeholder=\"Enter a concept name\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <!-- <div ng-messages=\"conceptEditForm.conceptName.$error\" ng-if=\"conceptEditForm.conceptName.$dirty\">\n                    <small ng-message=\"required\" class=\"error\">A concept name is required.</small>\n                </div> -->\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"DisplayName\">Concept Display Name</label>\n                <input\n                    name=\"DisplayName\"\n                    type=\"text\"\n                    id=\"DisplayName\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.displayName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n            </div> <!-- /.field -->\n\n            <div class=\"field related-forms\"> <!-- The default form is the concept name. TODO include an extra field to start with an additional form -->\n                <label for=\"relatedForms\">Related Forms</label>\n                <input\n                    class=\"related-concepts-item\"\n                    name=\"relatedForms\"\n                    type=\"text\"\n                    id=\"relatedForms\"\n                    placeholder=\"\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <button>+</button> <!-- TODO ng-click=\"addForm()\" -->\n            </div> <!-- /.field -->\n\n            <div class=\"field related-concepts\"> <!-- Duplicate this as a directive. TODO Make autocomplete -->\n                <label for=\"RelatedConcepts\">Related Concepts</label>\n                <input\n                    class=\"related-concepts-item\"\n                    name=\"RelatedConcepts\"\n                    type=\"text\"\n                    id=\"RelatedConcepts\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.relatedConcepts\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <button>+</button> <!-- TODO ng-click=\"addConcept()\" -->\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"select\">Entity Type</label>\n                <select class=\"global-date-selector custom\"\n                    ng-model=\"form.entity\"\n                    ng-options=\"entityType.name for entityType in supportedEntities\"\n                    required\n                    ></select>\n            </div>\n\n            <div class=\"button-bar group\">\n\n                <div class=\"small-6\">\n                    <div class=\"row\">\n                        <div class=\"large-3 medium-5 columns\">\n                            <input\n                                id=\"btn-submit\"\n                                type=\"submit\"\n                                value=\"Submit\"\n                                ng-disabled=\"conceptEditForm.$invalid\"\n                                class=\"button\"\n                            >\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </fieldset>\n    </form>\n</section>\n");
$templateCache.put("concept/concept.view.html","<header class=\"concept-header\">\n    <span>View Concept</span>\n</header>\n\n<section>\n  <div><button ng-click=\"backToSearch()\">Back To Search</button>\n  </div>\n</section>\n\n<section><p>Pending:</p>\n\n  <p>Back To Search</p>\n  <p>Include: View Attributes</p>\n  <p>Include: Show Forms</p>\n  <p>Include: Show Related Concepts (This is where we will have a d3.js Graphic)</p>\n  <p>Include: Show Forms of Related Concepts</p>\n</section>\n");}]);