# group_project: 
Lazy Slob Prototype Sprint 1 
#  To run our prototype , we use:
 1. Eclipse IDE , set up by import existing project as Dynamic web application -> config as Maven Project
 2. Apache TomCat 9.0.37 to deploy to Local Host
 3. MySQL Server 5.5 / we set the user: root , password: 12345 in Java Resources/META-INF/persistence.xml
 4.Run SQL script in resources/CreateDatabase.sql before deploying
 5.Open Window -> Preferences -> Server -> Installed Runtimes to create a Tomcat installed runtime
 -> Click on Add... to open the New Server Runtime dialog, then select your runtime under Apache (Apache Tomcat v9.0 in this example)
 ->Select Apache installation Directory  and choose TomCat folde:apache-tomcat-9.0.37  and click Finish
 6.Using Maven command : clean install to set up Dependencies 
 7. Click Run as :  Run on Server to begin deploying to Local host default port 8080.
# In case port 8080 in use , use CMD as with admin role to terminate existing process in port 8080 
-> netstat -ano | findstr :<PORT> ( find PID)
-> taskkill /PID <PID> /F 
if process with PID terminated , go back from step 6 to depploy application
