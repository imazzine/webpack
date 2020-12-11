/**
 * @fileoverview Export calculated module paths.
 * @author Artem Lytvynov
 * @license Apache-2.0
 */

'use strict';

import * as fs from 'fs';
import * as path from 'path';

function resolve(pth) {
  return path.resolve(fs.realpathSync(process.cwd()), pth);
}

const paths = {
  base: resolve('.'),
  src: resolve('src'),
  dist: resolve('dist'),
  public: resolve('public'),
  doc: resolve('doc'),
  coverage: resolve('coverage'),
  node_modules: resolve('node_modules'),
  dotenv: resolve('.env'),
  packageJson: resolve('package.json'),
  tsconfigJson: resolve('tsconfig.json'),
};

export default paths;