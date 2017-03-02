<!DOCTYPE html>
<html lang="en">

<body>
welcome
<%
dim fname
fname=Request.QueryString("fname")
If fname< >"" Then
  Response.Write("welcome", fname)
</body>

</html>
