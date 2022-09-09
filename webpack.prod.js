const HtmlWebPack= require ('html-webpack-plugin')
const MiniCssExtract =require ('mini-css-extract-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = {
    mode:'production',
    output: {
      clean: true// limpia la carpeta dist cada vez que se compila con npm run build
    },
   module:{
       rules: [{
test: /\..html$/,// verifica todos los archovos dentro de la app que son .html
loader: 'html.loader',
 options: {
  sources: false
}
       },
      {
       test:/\.css$/,
       exclude: /styles.css$/,
      use: ['stule-loader', 'css-loader' ]
    },
    {
      test:'/styles.css/',
use:[MiniCssExtract,'css-loader']
    }
    ]
    },
  optimization:{
    minimize: true,
    minimizer:{
        new CssMinimizer(),
        new Terser(),
    }

  },
  plugins:[
    new HtmlWebPack({
      title: 'Mi app de Webpack',
      template: './src/index.html'// para que se inyecte la info del index
    }),
    new MiniCssExtract({
      filename: '[name]. [fullhash].css ',
      ignoreOrder: false

    },
    {
      test: /\.(png|jpg?g|gif)$/,
    loader:'file-loader'
    },
    {
    test: /\.m?js$/,
    exclude: /home/modules/,
    use: {
        loader:"babel-modules",
        options:{
            presets: ['@babel/preset-dev']
        }
    }
    }
    )
  ]
}
