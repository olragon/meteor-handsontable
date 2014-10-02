Package.describe({
  summary: "Handsontable is a minimalistic approach to Excel-like table editor in HTML & jQuery",
  version: "0.11.3",
  git: "git@github.com:olragon/meteor-handsontable.git"
});

Package.onUse(function(api) {
  if (api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.3.1');
  }
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery.handsontable.full.js',
    'lib/jquery.handsontable.full.css'
  ],'client');
  api.export(['Handsontable'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('olragon:handsontable');
  api.addFiles('olragon:handsontable-tests.js');
});
