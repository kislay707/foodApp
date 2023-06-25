pipeline {
    agent any 
    tools {nodejs "nodejs"}

    stages {
        stage('Build') { 
            steps {
                // 
                sh 'node -v'
            }
        }
        stage('Test') { 
            steps {
                // 
                sh 'npm -v'
            }
        }
        stage('Deploy') { 
            steps {
                // 
                sh 'npm semantic-release'
            }
        }
    }
}