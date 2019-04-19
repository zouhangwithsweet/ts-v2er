pipeline {
    agent {
        docker {
            image 'node:10-alpine' 
            args '-p 5000:5000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm --registry https://registry.npm.taobao.org install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'deploy'
                sh 'scp ./dist/* root@172.17.235.252:/data/www/production/ts-v2er/'
            }
        }
    }
}