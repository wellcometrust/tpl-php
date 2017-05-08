const fs = require('fs');
const exec = require('child_process').exec;
/**
 * Renders a given tpl.php with the provided context
 *
 * @param      {string}   filePath  The absolute path to the tpl.php
 * @param      {object}   context   The context, which will become $variables in the template
 * @param      {object}   options   Options (currently only one, boolean shouldShowErrors [default: true] to toggle baked-in PHP errors)
 * @return     {Promise}  a Promise which resolves to the rendered HTML
 */
const render = function(filePath, context = {}, options) {
  if (!/\.tpl\.php$/.test(filePath)) {
    return new Promise((res, rej) => rej(`File must have the .tpl.php extension. Filename is: ${filePath}`));
  }

  const { showErrors } = options || {};

  const cmd = `php ${__dirname}/transformer.php ${filePath} '${JSON.stringify(context)}' ${showErrors || true}`;

  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) reject(stderr);
      else resolve(stdout);
    });
  });
};

module.exports = render;
