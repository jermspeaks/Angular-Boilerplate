'use strict';

angular.module('topicGraphEditor', [/* Dependencies */])

    // Customize
    // .run(require('./plugins'))
    // .run(require('./boot'))
    .controller('MainController', require('./src/common/MainController'))

;

require('templates');
