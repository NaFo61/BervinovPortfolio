(function () {
  'use strict';

  var cfg = window.__SHOWCASE__ || {};
  var apiBase = cfg.apiBase || '/api';

  function submitLead(site, form, payload) {
    return fetch(apiBase + '/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ site: site, form: form, payload: payload }),
    }).then(function (res) {
      if (!res.ok) {
        return res.text().then(function (text) {
          throw new Error(text || ('HTTP ' + res.status));
        });
      }
      return res.json();
    });
  }

  function formToObject(form) {
    var data = {};
    new FormData(form).forEach(function (value, key) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        if (!Array.isArray(data[key])) data[key] = [data[key]];
        data[key].push(value);
      } else {
        data[key] = value;
      }
    });
    return data;
  }

  window.BervinovLeads = {
    submit: submitLead,
    formToObject: formToObject,
  };
})();
