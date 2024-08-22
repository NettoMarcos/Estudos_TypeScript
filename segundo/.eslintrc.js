module.exports = {
    env: {

        browser: true,
        es6: true,
        node: true,
    },
    extends:[
        'eslint:recomended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    global: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOption: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins:['@typescript-eslint'],
    rules:{},
}