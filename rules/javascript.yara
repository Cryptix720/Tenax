rule js : Javascript {
	strings:
		$a = {48 89 5C 24 10}
		$0z = "function"
		$0x = {60 E8 00 00 00 00 58 83 E8 3D 50 8D B8}
		$0y = {00 00 7F F9 8E 14 9A 0B}
		
		
	condition:
		 $0z at entrypoint
}
