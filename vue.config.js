const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:8000/",
  },
  publicPath: process.env.NODE_ENV === "production" ? "/static/" : "/",
})
