export const managerEntries = (entry = []) => [
  ...entry,
  require.resolve('@ilinkdev/storybook-addon-development-templates/register'),
]
