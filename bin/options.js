module.exports = {

    // 可用命令
    "command": {
        create: {
            info: "创建项目脚手架",
            demo: "nefbl create",
            config: ['force']
        }
    },

    // 参数配置
    "config": {
        force: {
            short: 'f',
            info: '强制执行',
            demo: '--force|-f'
        },
        version: {
            short: 'v',
            info: '打印版本号',
            demo: '--version|-v'
        },
        help: {
            short: 'h',
            info: '显示帮助',
            demo: '--help|-h <term>'
        },
    },

    // 帮助信息
    "help": `
    Usage: nefbl <command>

    where <command> is one of:
      create

    nefbl --help|-h <命令>       打印具体的命令说明
    nefbl --help|-h              打印所有可用命令
      `

};
