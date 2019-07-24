pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sleep 1
      }
    }
    stage('Api') {
      steps {
        sh '''sh run.sh run
'''
      }
    }
  }
}