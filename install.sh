#!/bin/sh

echo "Hello Welcome to autoaid Installer"
sudo apt update
sudo apt install -y docker.io
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
docker run -e MYSQL_ROOT_PASSWORD=root -d --name mariadb --restart unless-stopped mariadb
docker run --name myadmin -d --link 94bf68aa4237:db -p 8899:80 --restart unless-stopped phpmyadmin/phpmyadmin
docker run --name api -d --link mariadb -p 9009:9000  --restart unless-stopped dumidu1998/autoaid_api:latest
docker run --name front  --restart unless-stopped -p 3000:3000 dumidu1998/autoaid_front

echo "AutoAid Setup Successfull!! visit your ip address with port 3000 to access the application. eg http://178.12.123.12:3000"
echo "Spring Boot API is running on the port 9009. eg http://178.12.123.12:9009"
echo "To Phpmyadmin visit your ip address with port 8899. eg http://178.12.123.12:8899"
echo "We have installed the Portainer to mange your docker containers easily! visit to port 9000 to access to portainer. eg http://178.12.123.12:9000"
echo "Spring Boot API is running on the port 9009. eg http://178.12.123.12:9009"
