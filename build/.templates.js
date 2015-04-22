angular.module("topicGraphEditor").run(["$templateCache", function($templateCache) {$templateCache.put("concept/concept.delete.html","<p>Delete a concept</p>\n");
$templateCache.put("concept/concept.html","<header id=\"main-header\">\n    <span><a ui-sref=\"concept\">Reverb Topic Graph Editor</a></span>\n</header>\n\n<div ui-view>\n    <section id=\"main-menu\">\n        <ul>\n            <li ng-repeat=\"edit in model.editors\">\n                <a ui-sref=\"{{edit.link}}\"><div class=\"main-menu-item\"><span>{{edit.displayName}}</span></div></a>\n            </li>\n        </ul>\n    </section>\n</div>\n");
$templateCache.put("concept/concept.new.html","<header class=\"concept-header\">\n    <span>Create a new concept</span>\n</header>\n\n<section>\n    <form name=\"conceptNewForm\" ng-submit=\"submitNewConcept(conceptNewForm.$valid)\" novalidate>\n        <fieldset class=\"conceptNewForm\">\n\n            <div class=\"field\">\n                <label for=\"conceptName\">Concept Name</label>\n                <input\n                    name=\"conceptName\"\n                    type=\"text\"\n                    id=\"conceptName\"\n                    placeholder=\"Enter a concept name\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <!-- <div ng-messages=\"conceptNewForm.conceptName.$error\" ng-if=\"conceptNewForm.conceptName.$dirty\">\n                    <small ng-message=\"required\" class=\"error\">A concept name is required.</small>\n                </div> -->\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"DisplayName\">Concept Display Name</label>\n                <input\n                    name=\"DisplayName\"\n                    type=\"text\"\n                    id=\"DisplayName\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.displayName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n            </div> <!-- /.field -->\n\n            <div class=\"field related-forms\"> <!-- The default form is the concept name. TODO include an extra field to start with an additional form -->\n                <label for=\"relatedForms\">Related Forms</label>\n                <input\n                    class=\"related-concepts-item\"\n                    name=\"relatedForms\"\n                    type=\"text\"\n                    id=\"relatedForms\"\n                    placeholder=\"\"\n                    ng-model=\"form.conceptName\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <button>+</button>\n            </div> <!-- /.field -->\n\n            <div class=\"field related-concepts\"> <!-- Duplicate this as a directive. -->\n                <label for=\"RelatedConcepts\">Related Concepts</label>\n                <input\n                    class=\"related-concepts-item\"\n                    name=\"RelatedConcepts\"\n                    type=\"text\"\n                    id=\"RelatedConcepts\"\n                    placeholder=\"Enter the concept display name\"\n                    ng-model=\"form.relatedConcepts\"\n                    autocapitalize=\"off\"\n                    autocorrect=\"off\"\n                    autofocus=\"autofocus\"\n                    required\n                />\n                <button>+</button>\n            </div> <!-- /.field -->\n\n            <div class=\"field\">\n                <label for=\"select\">Entity Type</label>\n                <select class=\"global-date-selector custom\"\n                    ng-model=\"form.entity\"\n                    ng-options=\"entityType.name for entityType in supportedEntities\"\n                    required\n                    ></select>\n            </div>\n\n            <div class=\"button-bar group\">\n\n                <div class=\"small-6\">\n                    <div class=\"row\">\n                        <div class=\"large-3 medium-5 columns\">\n                            <input\n                                id=\"btn-submit\"\n                                type=\"submit\"\n                                value=\"Submit\"\n                                ng-disabled=\"conceptNewForm.$invalid\"\n                                class=\"button\"\n                            >\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </fieldset> <!-- /.login -->\n    </form>\n</section>\n");
$templateCache.put("concept/concept.search.html","<header class=\"concept-header\">\n    <span>Search for a concept</span>\n</header>\n\n<section>\n  <p>Search Bar</p>\n\n  <p>Search Results</p>\n</section>\n");
$templateCache.put("concept/concept.update.html","<p>Update a concept</p>\n");}]);