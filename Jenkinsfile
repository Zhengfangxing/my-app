pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        build(propagate: true, job: 'maven', wait: true, waitForStart: true)
      }
    }

  }
}