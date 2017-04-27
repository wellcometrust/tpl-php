const tpl = require('../index.js');

describe('tpl-php render function', () => {
  it('renders simple HTML with string injection', done => {
    tpl('./spec/tpl/yo.tpl.php')
    .then(rendered => {
      expect(rendered).toBe('<h1>Yo.</h1>');
      done();
    });
  });

  it('renders simple HTML with context', done => {
    tpl('./spec/tpl/hello_name.tpl.php', { name: 'Alasdair' })
    .then(rendered => {
      expect(rendered).toBe('<h1>Hello, Alasdair</h1>');
      done();
    });
  });

  it('also works using the $context variable (for Drupal Paragraphs)', done => {
    tpl('./spec/tpl/paragraph.tpl.php', { name: 'Paragraph' })
    .then(rendered => {
      expect(rendered).toBe('<h1>Hello, Paragraph</h1>\n');
      done();
    });
  })

  it('renders lists of items', done => {
    const ctx = {
      todos: ['write tests', 'publish to npm', 'rejoice']
    };

    tpl('./spec/tpl/list.tpl.php', ctx)
    .then(rendered => {
      expect(rendered).toBe('<ul><li>write tests</li><li>publish to npm</li><li>rejoice</li></ul>');
      done();
    })
    .catch(err => {
      console.log(err);
      done.fail();
    })
  });

  it('fails if the filename doesn\'t end with .tpl.php', done => {
    tpl('./spec/tpl/not_tpl.php')
    .then(() => done.fail())
    .catch(err => done());
  });
});
