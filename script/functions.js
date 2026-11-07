// Small helpers for index.html. Runs after the page has loaded.
document.addEventListener('DOMContentLoaded', function () {

  // News: "show more" / "show less"
  var newsBtn = document.getElementById('news-toggle');
  var oldNews = document.getElementById('old_news');
  if (newsBtn && oldNews) {
    newsBtn.addEventListener('click', function () {
      var open = oldNews.hidden;
      oldNews.hidden = !open;
      newsBtn.setAttribute('aria-expanded', String(open));
      newsBtn.textContent = open ? '---- show less ----' : '---- show more ----';
    });
  }

  // Research: "Selected" / "Full List"
  var pubs = document.getElementById('publications');
  var showSel = document.getElementById('show-selected');
  var showAll = document.getElementById('show-all');
  function setFullList(full) {
    pubs.classList.toggle('show-all', full);
    showAll.classList.toggle('active', full);
    showSel.classList.toggle('active', !full);
    showAll.setAttribute('aria-pressed', String(full));
    showSel.setAttribute('aria-pressed', String(!full));
  }
  if (pubs && showSel && showAll) {
    showSel.addEventListener('click', function () { setFullList(false); });
    showAll.addEventListener('click', function () { setFullList(true); });
  }

  // Hover swap: a <tr data-hover="ID"> shows #ID (e.g. a video or second image)
  // over the still teaser while the mouse is on the row.
  document.querySelectorAll('tr[data-hover]').forEach(function (row) {
    var layer = document.getElementById(row.getAttribute('data-hover'));
    if (!layer) return;
    layer.style.opacity = '0';
    row.addEventListener('mouseenter', function () { layer.style.opacity = '1'; });
    row.addEventListener('mouseleave', function () { layer.style.opacity = '0'; });
  });

  // "Top" button appears after scrolling down
  var top = document.querySelector('.back-to-top');
  if (top) {
    var update = function () { top.hidden = window.scrollY < 600; };
    window.addEventListener('scroll', update, { passive: true });
    update();
  }
});
