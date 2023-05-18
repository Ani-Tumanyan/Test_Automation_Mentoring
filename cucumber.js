const common = `
  --require runner/hooks.js 
  --require src/features/support/*.js
  `;

module.exports = {
  default: `${common} --publish-quiet src/features/**/*.feature`,
};
