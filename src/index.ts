import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab_xkcd_py3 extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_xkcd_py3',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab_xkcd_py3 is activated!');
  }
};

export default extension;
