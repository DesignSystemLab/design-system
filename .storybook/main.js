const path = require('path');
const fs = require('fs');

function getStories(pkg) {
  const scope = pkg ? [pkg] : fs.readdirSync('packages');
  return scope
    .map(package => `packages/${package}/stories`)
    .filter(storyDir => fs.existsSync(storyDir))
    .map(storyDir => `../${storyDir}/*.stories.@(js|jsx|ts|tsx)`);
}

module.exports = {
  stories: getStories(),
  // stories: ['../packages/button/stories/.stories.mdx', '../packages/button/stories/.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react'
};
