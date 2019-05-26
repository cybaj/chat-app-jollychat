module.exports = {
    root: true,
    extends: [
        'standard',
        'plugin:vue/essential'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    plugins: [
        'standard',
        'vue'
    ],
    env: {
        browser: true
    },
    rules: {
    }
}

