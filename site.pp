include 'docker'

docker::image {'analisis2practica3/practica2cux':
        image_tag => 'latest'
        }

docker::run{'deploy':
        image => 'analisis2practica3/practica2cux',
        ports => '80:80'
}
