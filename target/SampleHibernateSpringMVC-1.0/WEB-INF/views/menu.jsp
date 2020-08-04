<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<ol>
   <c:forEach var="item" items="${menu}">
       <li>${item}</li>
   </c:forEach>
</ol>