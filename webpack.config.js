const HtmlWebPack= require ('html-webpack-plugin')
const MiniCssExtract =require ('mini-css-extract-plugin');
module.exports = {
    mode:'development',
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
  optimization:{},
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
    
    })
  ]
}
