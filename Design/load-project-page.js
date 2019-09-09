var path = infScroll.getPath()

var projectsContainer = $('.projects-container').infiniteScroll({
  path: 'page/{{#}}',
  // options...
});

$container.infiniteScroll('getPath');
// => 'page/2'