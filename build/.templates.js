angular.module("topicGraphEditor").run(["$templateCache", function($templateCache) {$templateCache.put("common/directive-tag-input.html","<div class=\"tag-input\">\n\n</div>\n");
$templateCache.put("concept/concept.delete.html","<header class=\"concept-header\">\n    <span>Delete a concept</span>\n</header>\n\n\n<p>FORM PENDING</p>\n");
$templateCache.put("concept/concept.html","<header id=\"main-header\">\n    <span><a ui-sref=\"concept\">Reverb Topic Graph Editor</a></span>\n</header>\n\n<div ui-view>\n    <section id=\"main-menu\">\n        <ul>\n            <li ng-repeat=\"edit in model.editors\">\n                <a ui-sref=\"{{edit.link}}\"><div class=\"main-menu-item\"><span>{{edit.displayName}}</span></div></a>\n            </li>\n        </ul>\n    </section>\n</div>\n");
$templateCache.put("concept/concept.new.attrs.html","<form>\n  <label for=\"Attributes\" >Concept Attributes</label>\n  <fieldset class=\"conceptNewForm\">\n\n    <div class=\"field\">\n      <label for=\"Categories\">Categories</label>\n      <!-- <input\n                    name=\"Categories\"\n                    type=\"text\"\n                    id=\"Categories\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.categories\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                /> -->\n\n      <tag-input id=\"categories-tag\" name=\"Categories\" ng-model=\"form.categories\" placeholder=\"Add a category\"></tag-input>\n      <!-- TODO autofocus -->\n\n    </div>\n    <!-- /.field -->\n\n    <div id=\"field\">\n      <!-- TODO Make this, and the lat/long into a directive -->\n      <label for=\"geoCoordinates\">GEO Coordinates</label>\n      <input name=\"geoCoordinates\" id=\"map-autocomplete\" placeholder=\"Autocomplete: Enter a place\" ng-model=\"form.address\" type=\"text\" autofocus=\"autofocus\"></input>\n    </div>\n    <section id=\"disabled-lat-long\" ng-if=\"place\">\n      <div class=\"lat-long-coordinates\" id=\"field\">\n        <label for=\"latitude\">Latitude</label>\n        <input name=\"latitude\" ng-model=\"form.latitude\" type=\"text\" autofocus=\"autofocus\" disabled></input>\n      </div>\n      <div class=\"lat-long-coordinates\" id=\"field\">\n        <label for=\"longitude\">Longitude</label>\n        <input name=\"longitude\" ng-model=\"form.longitude\" type=\"text\" autofocus=\"autofocus\" disabled></input>\n      </div>\n    </section>\n\n    <div class=\"field\">\n      <label for=\"select\">Concept Type</label>\n      <select class=\"global-date-selector custom\" ng-model=\"form.entity\" ng-options=\"entityType.name for entityType in supportedEntities\" required></select>\n    </div>\n\n    <div class=\"field\" ng-if=\"form.entity.name === \'Event\'\">\n      <div class=\"field\">\n        <label for=\"eventName\">Event Name</label>\n        <input name=\"eventName\" type=\"text\" id=\"eventName\" placeholder=\"Enter the event name\" ng-model=\"form.eventName\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n      </div>\n      <!-- /.field -->\n    </div>\n\n    <div class=\"field\">\n      <label for=\"select\">Is Block Listed?</label>\n      <select class=\"global-date-selector custom\" ng-model=\"form.blocked\" ng-options=\"blockType.name for blockType in blockedTypes\" required></select>\n    </div>\n\n    <div class=\"field related-concepts\" data-ng-repeat=\"relatedConcept in form.relatedConcepts\">\n      <label for=\"relatedConcept\" ng-show=\"$first\">Related Concepts</label>\n      <input type=\"text\" class=\"related-concepts-item\" ng-model=\"relatedConcept.name\" name=\"relatedConcept\" placeholder=\"Enter the concept display name\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n      <button class=\"delete-button\" type=\"button\" type=\"value\" ng-show=\"!$last\" ng-click=\"deleteConcept(relatedConcept)\">-</button>\n      <button type=\"button\" type=\"value\" ng-show=\"$last\" ng-click=\"addConcept(relatedConcept)\">+</button>\n    </div>\n    <!-- /.field -->\n\n    <div class=\"button-bar group\">\n\n      <div class=\"small-6\">\n        <div class=\"row\">\n          <div class=\"large-3 medium-5 columns\">\n            <input id=\"btn-submit\" type=\"submit\" value=\"Submit\" ng-disabled=\"conceptNewForm.$invalid\" class=\"button\">\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </fieldset>\n</form>\n");
$templateCache.put("concept/concept.new.forms.html","<form>\n  <div id=\"field\">\n    <label for=\"associatedform\">Associated Forms</label>\n\n    <div class=\"field related-forms\" data-ng-repeat=\"associatedform in form.associatedForms\">\n      <!-- TODO Make these into form directives -->\n      <!-- <section>\n                    <span>Last entry for the form is always the same as the concept name. Disabled for editing.</span>\n                </section> -->\n      <fieldset class=\"form-field\">\n        <label for=\"associatedform\">Form Name</label>\n        <input type=\"text\" class=\"related-forms-item\" ng-model=\"associatedform.name\" name=\"associatedForm\" placeholder=\"Enter a form\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n\n        <label for=\"associatedform\">Number of occurrences</label>\n        <input type=\"text\" class=\"related-forms-item\" ng-model=\"associatedform.occurenceCount\" name=\"associatedForm\" placeholder=\"\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n\n        <label for=\"associatedform\">Number of times linked</label>\n        <input type=\"text\" class=\"related-forms-item\" ng-model=\"associatedform.linkedCount\" name=\"associatedForm\" placeholder=\"\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n\n        <label for=\"associatedform\">Linked probability</label>\n        <!-- TODO replace with sliders in its own section at the end of the form -->\n        <input type=\"text\" class=\"related-forms-item\" ng-model=\"associatedform.linkedProbability\" name=\"associatedForm\" placeholder=\"Between 0 and 1\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n      </fieldset>\n      <button class=\"delete-button\" type=\"button\" type=\"value\" ng-click=\"deleteForm(associatedform)\">-</button>\n    </div>\n    <!-- /.field -->\n\n    <label for=\"associatedform\">Default Associated Form (same as the concept name)</label>\n\n    <div class=\"field related-forms\">\n      <!-- The default form is the concept name. TODO include an extra field to start with an additional form -->\n      <!-- <label for=\"associatedform\" ng-show=\"form.associatedForms.length === 0\">Associated Forms</label> -->\n      <fieldset class=\"form-field\">\n        <label for=\"associatedform\">Form Name</label>\n        <input class=\"related-forms-item\" name=\"relatedForms\" type=\"text\" id=\"relatedForms\" placeholder=\"Disabled: same as concept name\" ng-model=\"form.conceptName\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" required disabled />\n\n        <label for=\"associatedform\">Number of occurrences</label>\n        <input type=\"text\" class=\"related-forms-item\" ng-model=\"form.defaultForm.occurenceCount\" name=\"associatedForm\" placeholder=\"\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n\n        <label for=\"associatedform\">Number of times linked</label>\n        <input type=\"text\" class=\"related-forms-item\" ng-model=\"form.defaultForm.linkedCount\" name=\"associatedForm\" placeholder=\"\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n\n        <label for=\"associatedform\">Linked probability</label>\n        <input type=\"text\" class=\"related-forms-item\" ng-model=\"form.defaultForm.linkedProbability\" name=\"associatedForm\" placeholder=\"Between 0 and 1\" autocapitalize=\"off\" autocorrect=\"off\" autofocus=\"autofocus\" />\n      </fieldset>\n      <button type=\"button\" ng-click=\"addForm()\">+</button>\n      <!-- TODO ng-click=\"addForm()\" -->\n    </div>\n    <!-- /.field -->\n  </div>\n</form>\n");
$templateCache.put("concept/concept.new.html","<header class=\"concept-header\">\n    <span>Create a new concept</span>\n</header>\n\n<section>\n    <!-- <section id=\"new-concept-viz\" ng-if=\"form.conceptName\">\n        <header id=\"new-concept-viz-header\">{{form.conceptName}}</header>\n        <section>\n            <concept-preview concept-data=\"form\"></concept-preview>\n        </section>\n    </section> -->\n\n    <section>\n        <form name=\"conceptNewForm\" ng-submit=\"submitNewConcept(conceptNewForm.$valid)\" novalidate>\n            <section id=\"concept-label\">\n                <div class=\"concept-input-group\">\n                    <div class=\"concept-input-label\">\n                        <span>Concept: </span>\n                    </div>\n\n                    <div class=\"concept-input-field\">\n                        <input\n                            name=\"conceptName\"\n                            type=\"text\"\n                            id=\"conceptName\"\n                            placeholder=\"Enter a concept name\"\n                            ng-model=\"form.conceptName\"\n                            autocapitalize=\"off\"\n                            autocorrect=\"off\"\n                            autofocus=\"autofocus\"\n                            required\n                        />\n                        <span class=\"highlight\"></span>\n                        <span class=\"bar\"></span>\n                    </div>\n                </div>\n            </section>\n\n            <section class=\"concept-form-section\" ng-if=\"form.conceptName\">\n                <div id=\"concept-side-menu\">\n                    <ul class=\"menu\">\n                        <li class=\"side-menu-item\" ng-repeat=\"item in sideMenu\">\n                            <span ng-if=\"item.displayName === \'Forms\'\">\n                                <button class=\"side-menu-btn edit-button\" ng-click=\"editDropdown()\">{{item.displayName}}</button>\n                                <ul class=\"submenu\">\n                                    <li class=\"side-submenu-item\" ng-repeat=\"subItem in sideSubMenu\">\n                                        <button class=\"side-submenu-btn\" ng-click=\"switchForm(subItem.partial)\">{{subItem.displayName}}</button>\n                                    </li>\n                                </ul>\n                            </span>\n                            <span ng-if=\"item.displayName !== \'Forms\'\">\n                                <button class=\"side-menu-btn\" ng-click=\"switchForm(item.partial)\">{{item.displayName}}</button>\n                            </span>\n                        </li>\n                    </ul>\n                </div>\n\n                <div id=\"concept-partial-form\">\n                    <div ui-view></div>\n                </div>\n            </section>\n        </form>\n    </section>\n</section>\n\n<!--\nTODO\n\nForm to Concept link:\n\nSense probability\nNumber of occurrences\n\n-->\n");
$templateCache.put("concept/concept.new.links.html","<p>Partial for links</p>\n");
$templateCache.put("concept/concept.search.html","<header class=\"concept-header\">\n    <span>Search for a concept</span>\n</header>\n\n<section class=\"concept-search-bar\">\n  <form name=\"conceptSearchForm\" class=\"search-bar\" role=\"search\" ng-submit=\"search(conceptSearchForm.$valid)\" novalidate>\n    <input type=\"search\" placeholder=\"Enter Search\" ng-model=\"searchQuery\" required/>\n    <button class=\"search-submit\" type=\"submit\">\n      <img src=\"https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/search-icon.png\" alt=\"Search Icon\">\n    </button>\n  </form>\n</section>\n\n<section>\n  <div ui-view></div>\n</section>\n");
$templateCache.put("concept/concept.search.list.html","<header class=\"concept-header\">\n    <span>Search Results</span>\n</header>\n\n<table class=\"tables\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Options</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"concept in model.searchList\">\n      <td>{{concept.name}}</td>\n      <td><button ng-click=\"viewConcept(concept.id)\">View</button><button ng-click=\"editConcept(concept.id)\">Edit</button><button ng-click=\"deleteConcept(concept.id)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n");
$templateCache.put("concept/concept.update.html","<header class=\"concept-header\">\n    <span>Update for a concept</span>\n</header>\n\n<section>\n  <div><button class=\"sm-button\" ng-click=\"backToSearch()\">Back To Search</button>\n  </div>\n</section>\n\n<section>\n    <form name=\"conceptEditForm\" ng-submit=\"submitEditedConcept(conceptEditForm.$valid)\" novalidate>\n        <fieldset class=\"conceptEditForm\">\n\n            <div class=\"field\">\n                <label for=\"conceptName\">Concept Name</label>\n                <input\n                    name=\"conceptName\"\n                    type=\"text\"\n                    id=\"conceptName\"\n                    placeholder=\"Enter a concept name\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <!-- <div ng-messages=\"conceptEditForm.conceptName.$error\" ng-if=\"conceptEditForm.conceptName.$dirty\">\n                    <small ng-message=\"required\" class=\"error\">A concept name is required.</small>\n                </div> -->\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"DisplayName\">Concept Display Name</label>\n                <input\n                    name=\"DisplayName\"\n                    type=\"text\"\n                    id=\"DisplayName\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.displayName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n            </div> <!-- /.field -->\n\n            <div class=\"field related-forms\" data-ng-repeat=\"associatedform in form.associatedForms\"> <!-- TODO Make these into form directives -->\n                <label for=\"associatedform\" ng-show=\"$first\">Associated Forms</label>\n                <!-- <section>\n                    <span>Last entry for the form is always the same as the concept name. Disabled for editing.</span>\n                </section> -->\n                <input type=\"text\"\n                    class=\"related-forms-item\"\n                    ng-model=\"associatedform.name\"\n                    name=\"associatedForm\"\n                    placeholder=\"Enter a form\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required>\n                <button class=\"delete-button\" type=\"button\" type=\"value\" ng-click=\"deleteForm(associatedform)\">-</button>\n            </div> <!-- /.field -->\n\n            <div class=\"field related-forms\"> <!-- The default form is the concept name. TODO include an extra field to start with an additional form -->\n                <label for=\"associatedform\" ng-show=\"form.associatedForms.length === 0\">Associated Forms</label>\n                <input\n                    class=\"related-forms-item\"\n                    name=\"relatedForms\"\n                    type=\"text\"\n                    id=\"relatedForms\"\n                    placeholder=\"Disabled: same as concept name\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                    disabled\n                />\n                <button type=\"button\" ng-click=\"addForm()\">+</button> <!-- TODO ng-click=\"addForm()\" -->\n            </div> <!-- /.field -->\n\n            <div class=\"field related-concepts\" data-ng-repeat=\"relatedConcept in form.relatedConcepts\">\n                <label for=\"relatedConcept\" ng-show=\"$first\">Related Concepts</label>\n                <input type=\"text\"\n                    class=\"related-concepts-item\"\n                    ng-model=\"relatedConcept.name\"\n                    name=\"relatedConcept\"\n                    placeholder=\"Enter the concept display name\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required>\n                <button class=\"delete-button\" type=\"button\" type=\"value\" ng-show=\"!$last\" ng-click=\"deleteConcept(relatedConcept)\">-</button>\n                <button type=\"button\" type=\"value\" ng-show=\"$last\" ng-click=\"addConcept(relatedConcept)\">+</button>\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"select\">Entity Type</label>\n                <select class=\"global-date-selector custom\"\n                    ng-model=\"form.entity\"\n                    ng-options=\"entityType.name for entityType in supportedEntities\"\n                    required\n                    ></select>\n            </div>\n\n            <div class=\"button-bar group\">\n\n                <div class=\"small-6\">\n                    <div class=\"row\">\n                        <div class=\"large-3 medium-5 columns\">\n                            <input\n                                id=\"btn-submit\"\n                                type=\"submit\"\n                                value=\"Submit\"\n                                ng-disabled=\"conceptEditForm.$invalid\"\n                                class=\"button\"\n                            >\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </fieldset>\n    </form>\n</section>\n");
$templateCache.put("concept/concept.view.html","<header class=\"concept-header\">\n    <span>View Concept</span>\n</header>\n\n<section>\n  <div><button class=\"sm-button\" ng-click=\"backToSearch()\">Back To Search</button>\n  </div>\n</section>\n\n\n<table class=\"tables\">\n  <thead>\n    <tr>\n      <th>Key</th>\n      <th>Values</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>ID</td>\n      <td>{{concept.id}}</td>\n    </tr>\n    <tr>\n      <td>Name</td>\n      <td>{{concept.name}}</td>\n    </tr>\n    <tr>\n      <td>Display Name</td>\n      <td>{{concept.displayName}}</td>\n    </tr>\n    <tr>\n      <td>Associated Forms</td>\n      <td>\n        <ul>\n          <li ng-repeat=\"form in concept.forms\">\n            <span>{{form.name}}</span>\n          </li>\n        </ul>\n      </td>\n    </tr>\n    <tr>\n      <td>Related Concepts</td>\n      <td>\n        <ul>\n          <li ng-repeat=\"concept in concept.relatedConcepts\">\n            <span>{{concept.name}}</span>\n          </li>\n        </ul>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n<p>Pending:</p>\n\n<p>Include: Show Related Concepts (This is where we will have a d3.js Graphic)</p>\n<p>Include: Show Forms of Related Concepts</p>\n");}]);