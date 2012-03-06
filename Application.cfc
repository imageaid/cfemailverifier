<cfcomponent displayname="Application Component" output="false">

	<cfset this.name = "EmailVerifier">

	<cffunction name="onApplicationStart" returnType="boolean" output="false">
		<cfreturn true>
	</cffunction>
	
	<cffunction name="onApplicationEnd">	
		<cfargument name="ApplicationScope" required=true/>
	</cffunction>
	
	<cffunction name="onRequestStart" returnType="boolean">
		<cfargument name="thePage" type="string" required="true">
		<cfreturn true>
	</cffunction>	
	
	<cffunction name="onSessionStart" returntype="void">
	</cffunction>
	
	<cffunction name="onSessionEnd" returnType="void">
		<cfargument name="sessionScope" type="struct" required="true">
		<cfargument name="appScope" type="struct" required="false">
	</cffunction>
	
	<cffunction name="onError" returnType="void">
    	<cfargument name="Exception" required=true/>
    	<cfargument name="EventName" type="String" required=true/>
	</cffunction>
	
	<cffunction name="onMissingTemplate" returnType="boolean">
		<cfargument type="string" name="targetPage" required=true/>
		
		<cfreturn true/>
	</cffunction>
</cfcomponent>