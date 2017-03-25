$.get("http://motivating-tabs.herokuapp.com/", null, function(data) {
  var obj = JSON.parse(data);

  $('#author').html(obj.author);
  $('#quote').html(obj.quote);
});
