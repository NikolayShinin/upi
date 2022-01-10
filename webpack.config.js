const glob = require('glob');
const fs = require('fs');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');
const  HtmlWebpackExternalsPlugin  =  require ( 'html-webpack-externals-plugin' );
const { default: components } = require('./src/js/components');
const loader = require('sass-loader');
// const isDev = process.env.NODE_ENV === 'development'
const isDev = 'production';

// const HTMLS = glob.sync('*.html', {
//     matchBase: true,
//     cwd: path.join(__dirname, './src')
// })
// fs.readFile(path.resolve(__dirname, 'src/js/lib/index.js'), 'utf-8', (err, content)=> {
//     const arr = content.split(';');
//     let scripts = ''
//     arr.forEach((item)=> {
//         const index = item.indexOf('@')
//         if (item.indexOf('@') != -1) {
//             const path = item.substr(index + 1).replace(/[']/gi, ' ')
//             const indexStr = path.lastIndexOf('/')
//             const pathScript = path.substr(indexStr + 1)
//             scripts += `<script src="js/vendor/${pathScript}"></script>`
//         }
//     })
//     fs.writeFile(path.resolve(__dirname, 'src/html-modules/script.html'), scripts, ()=> {
        
//     })
// });

function insert(str, substr, pos) {
    var array = str.split('');
    array.splice(pos, 0, substr);
    return array.join('');
}

// fs.readFile(path.resolve(__dirname, 'src/index.html'), 'utf-8', (err, content)=> {
    
// });

module.exports = {
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'src'),
        },
    },
    mode: isDev,
    devtool: "inline-source-map",
    optimization: {
        //runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        if (isDev) {
                            if (module._identifier) {
                                // const indexStr = module._identifier.indexOf('!');
                                // const indexModules = module._identifier.substr(indexStr + 1).lastIndexOf('node_modules')
                                // const path = module._identifier.substr(indexStr + 1).substr(indexModules + 13)
                                // const indexPath = path.indexOf('/')
                                // const pathNew = path.substr(0, indexPath)
                                // return `vendor/${pathNew}/${pathNew.replace('.', '')}`;
                            } else {
                                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                                return `vendor/${packageName.replace('@', '')}/${packageName.replace('@', '').replace('.', '')}`;
                            } 
                        }
                    },
                },
            },
        },
    },
    entry: () => {
        let entryes = {}
        glob.sync('*.js', {
            matchBase: false,
            cwd: path.join(__dirname, './src/js/components')
        }).map((file, index)=> {
            const key =  'components/' + file.replace(/.js$/gi, '')
            entryes[key] = './src/js/components/' + file
        })
        // glob.sync('*.html', {
        //     matchBase: true,
        //     cwd: path.join(__dirname, './src')
        // }).map(file => {
        //     console.log(file);
        //     const key = file.replace(/.html$/gi, '').replace('-', '')
		// 	entryes[key] = (path.join(__dirname, './src/', file));
		// });
        //entryes.lib = './src/js/lib/index.js'
        entryes.main = './src/js/index.js'
        return entryes
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'node_modules')
        }
    },
    plugins: [
        new CleanWebpackPlugin (),
        ...glob.sync('*.html', {
            matchBase: false,
            cwd: path.join(__dirname, './src')
        }).map((file)=> {
            return new HTMLWebpackPlugin({
                filename: file,
                template: './src/' + file,
                inject: 'body',
            })   
        }),
        ...glob.sync('*.html', {
            matchBase: true,
            cwd: path.join(__dirname, './src/html-modules')
        }).map((file)=> {
            const location = file.replace(/[\/]/gi, '-').replace(/.html$/gi, '')
            return new HTMLWebpackPartialsPlugin({
                path: path.join(__dirname, './src/html-modules/') + file,
                location: location,
                template_filename: '*',
                priority: 'replace'
            })
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
			chunkFilename: 'css/[name].chunk.css'
        }),
        ...glob.sync('*.*', {
            matchBase: true,
            cwd: path.join(__dirname, './src/img')
        }).map((file)=> {
            const pathIndex = file.lastIndexOf('/')
            const pathFile = file.substr(pathIndex + 1)
            return new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(__dirname, 'src/img') + '/' + file,
                        to: path.join(__dirname, 'dist/img') + '/' + file.replace(pathFile, '')
                    }
                ],
            })
        }),
        ...glob.sync('*.*', {
            matchBase: true,
            cwd: path.join(__dirname, './src/fonts')
        }).map((file)=> {
            const pathIndex = file.lastIndexOf('/')
            const pathFile = file.substr(pathIndex + 1)
            return new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(__dirname, 'src/fonts') + '/' + file,
                        to: path.join(__dirname, 'dist/fonts') + '/' + file.replace(pathFile, '')
                    }
                ],
            })
        }),
        ...glob.sync('*.*', {
            matchBase: true,
            cwd: path.join(__dirname, './src/json')
        }).map((file)=> {
            const pathIndex = file.lastIndexOf('/')
            const pathFile = file.substr(pathIndex + 1)
            return new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(__dirname, 'src/json') + '/' + file,
                        to: path.join(__dirname, 'dist/json') + '/' + file.replace(pathFile, '')
                    }
                ],
            })
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ]
                
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.html$/,
            }
        ]
    }
}
// console.log(
//     glob.sync('*', {
//         matchBase: true,
//         cwd: path.join(__dirname, './src/img')
//     }).map((file)=> {
//         return new CopyWebpackPlugin([
//             {
//                 from: path.join(__dirname, 'src/img') + '/' + file,
//                 to: path.join(__dirname, 'dist')
//             }
//         ])
//     }),
// );