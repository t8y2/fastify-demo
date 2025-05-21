// .eslintrc.js
module.exports = {
  env: {
    browser: false,
    node: true,
    es2021: true,
  },
  // parser: '@typescript-eslint/parser', // 如果你用 TypeScript
  // plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended', // TS 推荐规则
    'plugin:prettier/recommended', // ⬅️ 确保放在最后
  ],
  rules: {
    'prettier/prettier': 'error', // 让 Prettier 报错出现在 ESLint 中
    'no-unused-vars': 'warn', // 示例规则
  },
};
