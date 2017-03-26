// query server
$.get("http://motivating-tabs.herokuapp.com/", null, function(data) {
  var obj = JSON.parse(data);

  // update DOM
  $('#quote').html('"'+obj.quote+'"');
  $('#author').html('-'+obj.author);
});
