pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 5000:5000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}