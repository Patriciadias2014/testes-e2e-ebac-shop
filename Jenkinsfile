pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
               git branch: 'main', url: 'https://github.com/Patriciadias2014/testes-e2e-ebac-shop.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
               sh 'npm install'
            }   
        }
        stage('Executar testes') {
            steps {
               sh 'NO_COLOR=1 npm run cy:run'
            }
        }
    }
}
