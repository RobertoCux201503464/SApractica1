node {
    stage('CHECKS'){
        git branch: 'master',url:"https://github.com/RobertoCux201503464/SApractica1.git"
    }
    stage('TEST'){
        sh "ng test --code-coverage"
    }
    stage('DEPLOY'){
        sh "npm install"
        sh "ng build --prod"
    }
}