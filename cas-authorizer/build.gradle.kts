import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "2.7.5"
	id("io.spring.dependency-management") version "1.1.0"
	kotlin("jvm") version "1.7.20"
	kotlin("plugin.spring") version "1.7.20"
}

group = "dev.vozniack"
version = "0.1"

java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-actuator:2.7.5")
	implementation("org.springframework.boot:spring-boot-starter-web:2.7.5")
	implementation("org.springframework.boot:spring-boot-starter-data-jpa:2.7.5")
	implementation("org.springframework.data:spring-data-elasticsearch:4.4.5")
	implementation("org.springframework.boot:spring-boot-starter-security:2.7.5")
	implementation("org.springframework.boot:spring-boot-starter-aop:2.7.5")

	implementation("org.postgresql:postgresql:42.5.0")

	implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.13.4")

	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

	implementation("io.jsonwebtoken:jjwt-api:0.11.5")

	runtimeOnly("io.jsonwebtoken:jjwt-impl:0.11.5")
	runtimeOnly("io.jsonwebtoken:jjwt-jackson:0.11.5")

	testImplementation("io.zonky.test:embedded-database-spring-test:2.1.2")
	testImplementation("org.springframework.boot:spring-boot-starter-test:2.7.5")
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "17"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}
