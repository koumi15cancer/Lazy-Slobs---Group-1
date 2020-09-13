# Dockerfile for lazyslobs spring boot web application's backend
FROM openjdk:11-jdk
FROM mysql/mysql-server:latest
FROM ubuntu:latest

# open port 8080 for webserver
EXPOSE 8080

# for jre installation
RUN mkdir -p /usr/share/man/man1

# install necessary packages
RUN apt-get update
RUN apt-get install -y nano
RUN apt-get install -y nodejs
RUN apt-get install -y maven
RUN apt-get install -y git
RUN git clone https://github.com/koumi15cancer/Lazy-Slobs---Group-1
RUN cd Lazy-Slobs---Group-1
RUN mvn clean && mvn install

ARG JAR_FILE=target/LazySlob-0.0.1-SNAPSHOT.war
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
