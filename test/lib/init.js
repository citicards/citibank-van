import test from 'ava';
import App from '../../';

test('should create new library', (t) => {
  const app = new App();

  t.truthy(app);
  t.truthy(typeof app === 'object');
  t.pass();
});
