module.exports = {
    apps: [
        {
            script: 'app.js',
            cwd: 'backend/',
            name: 'app',
            watch: false
        },
        {
            script: 'server.js',
            cwd: 'frontend/',
            name: 'server',
            watch: false
        }
    ]
}