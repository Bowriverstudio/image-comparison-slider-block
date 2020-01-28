let path = require('path')
let defaultConfig = require("@wordpress/scripts/config/webpack.config");

// custom config for scss files
const customConfig = {
    ...defaultConfig,
    entry: {
        editor: './src/editor.scss',
        style: './src/style.scss',
    },
    output: {
        filename: '__[name].assets.php',
        path: path.resolve( process.cwd(), 'build' ),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                ]
            }
        ]
    }
}

// Delete the source-map generator for css files
delete customConfig.devtool

// Add entries for custom js files
defaultConfig.entry = {
    index: defaultConfig.entry.index,
    frontend: './src/frontend.js',
}

module.exports = [defaultConfig, customConfig]