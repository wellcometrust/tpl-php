<ul><?php print join(array_map(
    function($todo) { return '<li>' . $todo . '</li>'; },
    $variables['todos']
  ), '') ?>
</ul>