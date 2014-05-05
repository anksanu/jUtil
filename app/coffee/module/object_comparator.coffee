jUtil = jUtil ? this
 
jUtil.compare = (param1, param2) ->
	temp = {}
	for key,value of param1
		temp[key] = param2[key]
	JSON.stringify(param1) == JSON.stringify(temp)

	