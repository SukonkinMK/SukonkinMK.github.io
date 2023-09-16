/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})*/
module.exports = {
  pages: {
    'index': {
      entry: './src/pages/index/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'blog': {
      entry: './src/pages/blog/main.js',
      template: 'public/index.html',
      title: 'Blog',
      chunks: ['chunk-vendors', 'chunk-common', 'blog']
    }
    ,
    'blogDetails': {
      entry: './src/pages/blogDetails/main.js',
      template: 'public/index.html',
      title: 'Blog Details',
      chunks: ['chunk-vendors', 'chunk-common', 'blogDetails']
    },
    'project': {
      entry: './src/pages/project/main.js',
      template: 'public/index.html',
      title: 'Project',
      chunks: ['chunk-vendors', 'chunk-common', 'project']
    }
  }
}