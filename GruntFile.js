module.exports = function(grunt){
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    loadPath: './bower_components/bourbon/app/assets/stylesheets/'
                },
                files: {
                    './public/css/main.css' : './app/assets/scss/main.scss'
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                   expand: true,
                   cwd: './public/css/',
                   src: ['*.css', '!*.min.css'],
                   dest: './public/css/',
                   ext: '.min.css'
                }]
            }
        },

        watch:{
            style: {
                files: ['./app/assets/scss/main.scss'],
                tasks: ['sass', 'cssmin']
            },
            livereload: {
              options: { livereload: true },
              files: ['./public/css/main.min.css']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['sass', 'watch']);
}
