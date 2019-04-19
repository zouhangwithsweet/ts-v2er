pipeline {
    stages {
        stage('Build') { 
            steps {
                echo 'build'
                sh 'npm --registry https://registry.npm.taobao.org install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'deploy'
                sh 'rsync -avz -e ./dist/* root@172.17.235.252:/data/www/production/ts-v2er/'
            }
        }
    }
}