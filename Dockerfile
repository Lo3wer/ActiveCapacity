FROM maven:3.8.5-openjdk-17 AS build
COPY . .
WORKDIR ./backend
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
COPY --from=build /taget/capacity_backend-0.0.1-SNAPSHOT.jar capacity_backend.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "capacity_backend.jar"]