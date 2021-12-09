const pkg = JSON.parse(require('fs').readFileSync('./package.json'));

module.exports = {

    // 打包入口
    entry: './src/main.ts',

    // 打包出口
    output: 'build/main@v' + pkg.version + '.js'
};
