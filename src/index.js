const { distros, get } = require('./distro');
const { getPackageManager } = require('./pkgManagers.js');

const name = () => (process.platform !== 'win32' ? get('NAME') : 'Windows');
const v = () => get('VERSION_ID');
const isRoot = () => (process.getuid && process.getuid() === 0) || false;
const getPM = (operation = 'install') => getPackageManager(name(), operation, v());

module.exports = { isRoot, name, v, distros, get, getPM };
