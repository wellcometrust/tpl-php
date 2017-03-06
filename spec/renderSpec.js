const tplphp = require('../index.js');

describe('Prime render function', () => {
  it('renders simple HTML with string injection', done => {
    tplphp('./spec/tpl/yo.tpl.php')
    .then(rendered => {
      expect(rendered).toBe('<h1>Yo.</h1>');
      done();
    });
  });

  it('renders simple HTML with context', done => {
    tplphp('./spec/tpl/hello_name.tpl.php', { name: 'Alasdair' })
    .then(rendered => {
      expect(rendered).toBe('<h1>Hello, Alasdair</h1>');
      done();
    });
  });

  it('renders lists of items', done => {
    const ctx = {
      todos: ['write tests', 'publish to npm', 'rejoice']
    };

    tplphp('./spec/tpl/list.tpl.php', ctx)
    .then(rendered => {
      expect(rendered).toBe('<ul><li>write tests</li><li>publish to npm</li><li>rejoice</li></ul>');
      done();
    })
    .catch(err => {
      console.log(err);
      done.fail();
    })
  })
});