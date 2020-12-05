node {
    stage('CHECK'){
        git branch: 'master',url:"https://github.com/RobertoCux201503464/SApractica1.git"
    }
    stage('BUILD'){
        sh "ng build --prod"
    }

    stage('DEPLOY'){
        sh "ng serve"
    }




}