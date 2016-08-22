<?php
	require_once("definitions/functions.php");
	require_once("system/config.php");
	
	if($maintenance == true){
		echo "This site is under maintenance";
	}
	else {
		getPage();
	}
?>
