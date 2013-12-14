Package.describe({
  summary: "Handsontable is a minimalistic approach to Excel-like table editor in HTML & jQuery"
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.add_files(['lib/jquery.handsontable.full.js', 'lib/jquery.handsontable.full.css'], 'client');
  api.export("Handsontable");
});
