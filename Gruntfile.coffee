module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    coffee:
      app:
        expand: true
        cwd: 'app/coffee'
        src: ['**/*.coffee']
        dest: 'app/js/'
        ext: '.js'
    karma:
      unit:
        configFile: 'karma.conf.js'
    watch:
      app:
        files: '**/*.coffee'
        tasks: ['coffee']

  # These plugins provide necessary tasks.
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks 'grunt-contrib-watch'

  # Default task.
  grunt.registerTask 'default', ['watch']