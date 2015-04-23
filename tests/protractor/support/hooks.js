myAroundHooks = function() {
    this.Around(function(runScenario) {

        // Before
        this.loadTopicGraph();

        runScenario(function(callback) {
            // After

            // setTimeout(function() {
            //     // console.log('Finishing tests...');
            //     return;
            // }, 10000);

            // this.signOut();

            // Tell Cucumber we're done:
            callback();
        });
    });
};

module.exports = myAroundHooks;
