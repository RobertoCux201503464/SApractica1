node {
    stage('CHECKS'){
        git branch: 'master',url:"https://github.com/RobertoCux201503464/SApractica1.git"
        sh 'docker rmi frontend'
        sh 'docker build -t "frontend" .'
    }
    stage('DEPLOY'){
        sh " sudo docker run -d -p 80:80 --name practica2 frontend "
    }
}