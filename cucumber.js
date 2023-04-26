const common = `
  --require runner/hooks.js 
  --require features/support/steps.js
  `;

module.exports = {
  default: `${common} --publish-quiet features/**/*.feature`,
};
