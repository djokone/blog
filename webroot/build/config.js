module.exports = {
  entry: {
    app: ['./webroot/sass/app.scss', './webroot/js/app.js']
  },
  port: 3003,
  html: false,
  browsers: ['last 2 versions', 'ie > 8'],
  assets_url: '/assets/',  // Urls dans le fichier final
  // stylelint: './css/**/*.scss',
  assets_path: '/webroot/assets/', // ou build ?
  refresh: ['src/**/*.php', 'src/**/*.ctp'], // Permet de forcer le rafraichissement du navigateur lors de la modification de ces fichiers
  historyApiFallback: true, // Passer à true si on utilise le mode: 'history' de vue-router (redirige toutes les requêtes sans réponse vers index.html)
  debug: process.env.NODE_ENV === 'development'
  // debug: false
}
