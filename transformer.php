<?php
// we prefix our variables with tpl_php_ so they hopefully don't clash with template vars
$tpl_php_show_err = $argv[3] === 'true';
// set error reporting vars if needed
if ($tpl_php_show_err) {
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
}
else {
  ini_set('display_errors', 0);
  ini_set('display_startup_errors', 0);
}
// get the template code
$tpl_php_tpl = $argv[1];
$tpl_php_file = file_get_contents($tpl_php_tpl);
// parse variables
$variables = json_decode($argv[2], true);
$content = $variables;
// execute template
eval("?>$tpl_php_file");
?>
