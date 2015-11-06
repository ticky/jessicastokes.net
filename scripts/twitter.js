var script;
if (document.querySelectorAll && document.querySelectorAll('.twitter-tweet').length > 0) {
  script = document.createElement('script');
  script.src = '//platform.twitter.com/widgets.js';
  document.body.appendChild(script);
}
