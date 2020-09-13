# ============================= #
# (OPTIONAL) SETTING UP SCREENS #
# ============================= #
# using screen to keep the docker containers running
# instead of running them as a service using '-d'
# (this is purely due to preference)
# create 3 screens for back-end, front-end, and mysql
screen -S backend
screen -S frontend
screen -S mysql

# if screen is not installed, use the following
apt-get install screen


# ========================== #
# INSTALL NECESSARY PACKAGES #
# ========================== #
apt-get install maven


# =================== #
# CLONING GITHUB REPO #
# =================== #
# clone repo
git clone https://github.com/koumi15cancer/Lazy-Slobs---Group-1

# check current branch
git branch

# if not restfulAPI branch, switch to restfulAPI branch
git checkout restfulAPI


# ================================= #
# SETTING UP DOCKER MYSQL CONTAINER #
# ================================= #
# attach to 'mysql' screen we created earlier
screen -r mysql

# pull mysql image
docker pull mysql/mysql-server:latest

# run mysql server with container name as mysql
# and map the port 3306 of the container to port 3306
# to access your mysql server remotely
# and allow root connections from other hosts
docker run --name=mysql -e MYSQL_ROOT_HOST=% -p 3306:3306 -d mysql/mysql-server

# print the logs of mysql container
# to see what's going on as well as
# to get the auto-generated root password
docker logs mysql

# go into 
docker exec -it mysql mysql -u root -p

# before being able to make any sql query,
# the system needs you to change root password
# we use 12345 because our application.properties file
# has root password as 12345
ALTER USER 'root'@'localhost' IDENTIFIED BY '12345';

# then do this to prevent access denied error when
# running the spring boot web application
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '12345';

# create 'restaurant' database
CREATE DATABASE restaurant;

# CTRL + A + D to detach

# ========================================= #
# SETTING UP THE WEB APPLICATION'S BACK END #
# ========================================= #
# attach to 'backend' screen we created earlier
screen -r backend

# change application.properties's spring.datasource.url IP to the machine's IP
nano Lazy-Slobs---Group-1/src/main/resources/application.properties

# replace the x.x.x.x with the correct IP
jdbc:mysql://x.x.x.x:3306/restaurant

# go into the repo directory
cd Lazy-Slobs---Group-1

# perform maven clean and maven install
mvn clean && mvn install

# build spring boot web application named 'backend' with tag 'latest'
docker build -t backend:latest .

# finally, run the spring boot web application's backend
docker run --name=backend -it -p 8080:8080 backend:latest

# CTRL + A + D to detach


# ========================================= #
# SETTING UP THE WEB APPLICATION'S FRONT END #
# ========================================= #
# attach to 'frontend' screen we created earlier
screen -r frontend

# go to the correct Dockerfile directory
cd Lazy-Slobs---Group-1

# build spring boot web application named 'frontend' with tag 'latest'
docker build -f Dockerfile2 -t frontend:latest .

# finally, run the spring boot web application's frontend
docker run --name=frontend -it -p 80:80 -p 8081:8081 frontend:latest

# CTRL + A + D to detach
