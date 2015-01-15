Package.describe({
  name: 'olragon:handsontable',
  summary: 'Handsontable is a minimalistic approach to Excel-like table editor in HTML & jQuery',
  version: '0.12.3',
  git: 'https://github.com/olragon/meteor-handsontable.git'
});

Package.onUse(function(api) {
  if (api.versionsFrom) {
    api.versionsFrom('0.9.0');
  }
  api.use('jquery', 'client');
  api.addFiles([
    'lib/handsontable/dist/handsontable.full.js',
    'lib/handsontable/dist/handsontable.full.css'
  ],'client');
  api.export(['Handsontable'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('olragon:handsontable');
  api.addFiles('olragon_handsontable-tests.js');
});
