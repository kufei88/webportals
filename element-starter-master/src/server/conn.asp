
<%
dim Str_DBServer,Str_Database,Str_Username,Str_Password,ConnStr,conn
Str_DBServer="192.168.0.123"
Str_Database="jsweb"
Str_Username="jsuser"
Str_Password="jssoft2018"
ConnStr = "Provider=SQLOLEDB;Data Source="& Str_DBServer &";Initial Catalog="& Str_Database &";User Id="& Str_Username &";Password="& Str_Password &";"

set conn=server.createobject("ADODB.CONNECTION")
if err then
err.clear
else
conn.open connstr
end if
sub CloseConn()
	conn.close
	set conn=nothing
end sub
%>