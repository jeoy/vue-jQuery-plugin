// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        "node": true,
        "browser": true,
        "jquery": true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    // extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    globals: {
        "__HOST__": true,
        "_MOCK_LIST_": true,
        "__WITH_FEEDBACK__": true,
        "_SSO_URL_": true,
        "_PID_": true
    },
    "rules": {
        // recommend at least one newline at the end of files

    }
}
