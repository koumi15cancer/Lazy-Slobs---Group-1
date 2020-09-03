FROM openjdk:14
ADD target/LazySlob-server.war LazySlob-server.war
EXPOSE 8081
ENTRYPOINT {"java" ,"war","LazySlob-server.war"}



FROM node:12.18.3