
const path = require('path');

module.exports = {
    'devtool': 'cheap-module-source-map',

    'entry': './index.js',

    'module': {
        'rules': [
            {
                'test': /\.js$/,
                'loader': 'babel-loader',
                'exclude': /node_modules/
            }
        ]
    },

    'output': {
        'filename': 'bundle.js',
        'path': path.resolve(__dirname, 'build/')
    },

    'resolve': {
        'extensions': ['.js'],
        'modules': [
            'node_modules',
            path.resolve(__dirname)
        ]
    }
};

