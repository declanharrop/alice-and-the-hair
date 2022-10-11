(function (b, c) {
  (b.saloniqid = 'ba4ec2c4-ae5f-4f81-a6de-82ee2a837ac8'),
    (b.saloniqsite = 'https://bookings.saloniq.co.uk');
  let d;
  let g;
  const e = 'onlinebookingwidget-loader';
  const f = c.getElementsByTagName('script')[0];
  c.getElementById(e) ||
    ((d = c.createElement('script')),
    (d.id = e),
    (d.async = !0),
    (d.src = `${b.saloniqsite}/scripts/${e}.js?d=${Date.now()}`),
    (g = f ? f.parentNode : c.getElementsByTagName('head')[0]),
    g.insertBefore(d, f));
})(window, document);
