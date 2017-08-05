import App from './app';
import sourceMap from 'source-map-support';

sourceMap.install();

const app = new App();
app.init();
