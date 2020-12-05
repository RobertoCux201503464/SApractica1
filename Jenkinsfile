node {
    stage('CHECKS'){
        git branch: 'master',url:"https://github.com/RobertoCux201503464/SApractica1.git"
    }
    stage('BUILD'){
        sh "npm install"
        sh "ng build --prod"
    }
    stage('TEST'){
        sh "ng test"
    }

    stage('DEPLOY'){
        sh "ng serve"
    }




}