# tpl-php

Renderer for Drupal 7 `.tpl.php` files for use with pattern libraries.


### Installation

`npm install tpl-php`

### Usage

Your template:

```php
<h1>Good morning, <?php print $variables['name']; ?></h1>
```

In node:

```js
const tpl = require('tpl-php');

tpl('my-template.tpl.php', { name: 'Alasdair' })
.then(rendered => console.log(rendered)); // <h1>Good morning, Alasdair</h1>
```

### Development

+ run tests with `npm test`
+ tests are located in the `spec` directory, and are based on `jasmine`.