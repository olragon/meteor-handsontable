// Write your tests here!
// Here is an example.
if (Meteor.isClient) {
  Tinytest.add('$.fn.handsontable & Handsontable exists', function (test) {
    test.notEqual(jQuery.fn.handsontable, undefined);
  });

  Tinytest.add('Handsontable exists', function (test) {
    test.notEqual(window.Handsontable, undefined);
  });
}