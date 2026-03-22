// ============================================================
// Hans Stam · Hardware Ecosystem Strip
// Hosted at: https://www.dfminsights.com/ecosystem.js
// Edit this ONE file to update the footer on ALL sites.
//
// TO ADD A SITE: add an entry to the SITES array below.
// TO REMOVE A SITE: delete its entry from the array.
// TO MARK CURRENT SITE: set current:'true' on the matching entry
//   — but the script auto-detects the current domain, so you
//   don't need to touch individual site files when you add/remove.
// ============================================================

(function() {
  var SITES = [
    {
      icon: '📖',
      name: 'The Book',
      desc: 'The Hardest Hardware Lessons',
      url:  'https://thehardesthardwarelessons.com/',
      match: 'thehardesthardwarelessons.com'
    },
    {
      icon: '⚠️',
      name: 'DFM Insights',
      desc: 'FMEA · Charter · Timeline',
      url:  'https://www.dfminsights.com/',
      match: 'dfminsights.com'
    },
    {
      icon: '🏭',
      name: 'Factory Truth',
      desc: 'China sourcing · vetted factories',
      url:  'https://www.factorytruth.com/',
      match: 'factorytruth.com'
    },
    {
      icon: '🔧',
      name: 'Consulting',
      desc: 'Get unstuck · prototype to MP',
      url:  'https://hansstam.eu/',
      match: 'hansstam.eu'
    },
    {
      icon: '🗺️',
      name: 'Founder Guide',
      desc: 'Idea to mass production',
      url:  'https://www.hardwarefounderguide.com/',
      match: 'hardwarefounderguide.com'
    },
    {
      icon: '🇨🇳',
      name: 'TroubleMaker',
      desc: 'Hardware hub · Shenzhen',
      url:  'https://troublemakershenzhen.com/',
      match: 'troublemakershenzhen.com'
    },
    {
      icon: '✍️',
      name: 'Substack',
      desc: 'The unpublished version',
      url:  'https://thehardesthardwarelessons.substack.com/',
      match: 'substack.com'
    }
  ];

  // Auto-detect which site we're on
  var host = window.location.hostname;

  // Build the strip HTML
  var linksHTML = SITES.map(function(site) {
    var isCurrent = host.indexOf(site.match) !== -1;
    var style = isCurrent
      ? 'display:flex;align-items:center;gap:9px;padding:10px 14px;border-radius:7px;border:1px solid rgba(232,164,59,0.35);flex:1;min-width:150px;background:rgba(232,164,59,0.12);color:#e8c547;cursor:default;text-decoration:none'
      : 'display:flex;align-items:center;gap:9px;padding:10px 14px;border-radius:7px;text-decoration:none;border:1px solid #222;flex:1;min-width:150px;background:rgba(255,255,255,0.04);color:#ccc;transition:border-color .15s';

    var tag = isCurrent ? 'div' : 'a';
    var href = isCurrent ? '' : ' href="' + site.url + '" target="_blank" rel="noopener"';

    return '<' + tag + href + ' style="' + style + '">'
      + '<span style="font-size:16px;flex-shrink:0">' + site.icon + '</span>'
      + '<div>'
      + '<div style="font-size:12px;font-weight:600;margin-bottom:1px">' + site.name + '</div>'
      + '<div style="font-size:11px;opacity:.6;line-height:1.3">' + site.desc + '</div>'
      + '</div>'
      + '</' + tag + '>';
  }).join('');

  var stripHTML = '<div id="hs-ecosystem" style="background:#0a0a0a;border-top:1px solid #1a1a1a;padding:20px 40px;font-family:system-ui,sans-serif">'
    + '<div style="max-width:1100px;margin:0 auto">'
    + '<div style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#444;margin-bottom:14px;font-family:monospace">Hans Stam · Hardware Ecosystem</div>'
    + '<div style="display:flex;flex-wrap:wrap;gap:8px;align-items:stretch">'
    + linksHTML
    + '</div>'
    + '</div>'
    + '</div>';

  // Inject into page
  // Remove any existing hardcoded strip first (for sites already using the old version)
  var existing = document.getElementById('hs-ecosystem');
  if (existing) existing.remove();

  document.body.insertAdjacentHTML('beforeend', stripHTML);
})();
