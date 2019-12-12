import '../scss/style.scss';
import RibsWysiwyg from './RibsWysiwyg';

const wysiwyg = new RibsWysiwyg({
  mode: 'inline',
  selector: '[data-ribs-wysiwyg]',
  height: 400,
});
