jUtil = jUtil ? this
 
jUtil.compare = (param1, param2) ->
	JSON.stringify(param1) == JSON.stringify(param2)