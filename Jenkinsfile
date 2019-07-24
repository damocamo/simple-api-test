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
cd script
sh run.sh run
'''
      }
    }
  }
}