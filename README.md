# Lazy-Slobs---Group-1 
# READ ME 
 ## Import as Spring Boot application 
 ## Set up Database connection in Properties file : ( MySQL)
  - spring.datasource.url=jdbc:mysql://localhost:3306/restaurant
  - spring.datasource.username= #yourusenamedatabase
  - spring.datasource.password= #yourpasswordnamedatabase
 ## Run server side:
  - Run file LazySlobApplication.java in LazySlob/src/main/java/com/LazySlob/
 ## Run client side at folder demo_react : 
  - install Node.JS
  - cd to LazySlob/demo_react in terminal
  - execute this command `npm start`
 ## Run this sql script to insert Role in database:
  - LazySlob/src/main/resources/dataRole/
  ## Roles : Customer ,Admin , Moderator 
  - Public user can register account ( default as normal customer) 
  - All roles/ public user can add reservations 
  - All roles can view list of reservations ( Must log in )
  - Only Admin can delete Reservations
  - Only User can edit Reservations
  
 <a href="https://travis-ci.org/koumi15cancer/Lazy-Slobs---Group-1"><img src="https://travis-ci.org/koumi15cancer/Lazy-Slobs---Group-1.svg?branch=2.1"></a>
