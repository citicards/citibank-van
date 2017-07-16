import test from 'ava';
import App from '../../lib';

test('should create new library', (t) => {
  const app = new App();
  t.truthy(app);
  t.truthy(typeof app === 'object');
  t.pass();
});
