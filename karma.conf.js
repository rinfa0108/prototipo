module.exports = function(config){
  config.set({

    basePath : './',
	
    files : [
        'app/vendor/angular/angular.js',
        'app/vendor/**/*.js',
        'app/components/**/*.js',
        'app/directives/*.js',
        'app/services/*.js',
        'app/general-categories/**/*.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
