<?php
$tpl = $argv[1];
$file = file_get_contents($tpl);

$variables = json_decode($argv[2], true);
$content = $variables;
eval("?>$file");
?>
