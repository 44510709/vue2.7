const { defineConfig } = require('@vue/cli-service')

const path = require('path')

function resolve(dir) {

    return path.join(__dirname, dir);
}

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    }
})