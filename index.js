const fs = require('fs');
const exec = require('child_process').exec;
/**
 * Renders a given tpl.php with the provided context
 *
 * @param      {string}   filePath  The absolute path to the tpl.php
 * @param      {object}   context   The context, which will become $variables in the template
 * @return     {Promise}  a Promise which resolves to the rendered HTML
 */
const render = function(filePath, context) {
  const cmd = `php transformer.php ${filePath} '${JSON.stringify(context)}'`;

  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) reject(stderr);
      else resolve(stdout);
    });
  });
};

module.exports = render;