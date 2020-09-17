# Dockerfile for lazyslobs spring boot web application's backend
FROM openjdk:14-jdk
FROM mysql/mysql-server:latest
FROM ubuntu:latest
ARG JAR_FILE=target/LazySlob-0.0.1-SNAPSHOT.war
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]


# open port 8080 for webserver
EXPOSE 8080

# for jre installation
RUN mkdir -p /usr/share/man/man1

# install necessary packages
RUN apt-get update
RUN apt-get install -y nano
RUN apt-get install -y nodejs
RUN apt-get install -y maven
