# Use Maven with OpenJDK 17 for building the backend
FROM maven:3.8.5-openjdk-17 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy only the backend (assuming it's inside `src/`)
COPY ./ ./

# Run Maven package command to build the JAR file
RUN mvn clean package -DskipTests

# Use OpenJDK 17 for running the built application
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the built JAR file from the build stage (fixing target directory)
COPY --from=build /app/target/capacity_backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the application port
EXPOSE 8080

# Set the entrypoint to run the backend
ENTRYPOINT ["java", "-jar", "app.jar"]



# FROM maven:3.8.5-openjdk-17 AS build
# COPY . .
# WORKDIR ./backend
# RUN mvn clean package -DskipTests

# FROM openjdk:17-jdk-slim
# COPY --from=build /taget/capacity_backend-0.0.1-SNAPSHOT.jar capacity_backend.jar
# EXPOSE 8080
# ENTRYPOINT ["java", "-jar", "capacity_backend.jar"]