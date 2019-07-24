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
        sh '''ls
sh run.sh run
'''
      }
    }
  }
}