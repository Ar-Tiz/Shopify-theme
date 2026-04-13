async function digitaneoCore() {
  const s = window.location.hostname;
  const cfgUrl = "https://cdn.jsdelivr.net/gh/Ar-Tiz/Shopify-theme@main/Licenses.json";
  const rdrUrl = "https://docs.google.com/forms/d/e/1FAIpQLScys1XhUUbg7iJ6VI7GLSb7IqwzC4amxvH9t5N4PyB68eQl0Q/formResponse?entry.595339936="; 

  const now = new Date().getTime();
  const last = localStorage.getItem('_dg_l');
  const st = localStorage.getItem('_dg_s');
  const rep = localStorage.getItem('_dg_r');

  if (last && (now - last < 2592000000) && st === '1' && rep === '1') return;

  try {
    const res = await fetch(cfgUrl + "?t=" + now, { cache: 'no-store' });
    const cfg = await res.json();

    const ok = cfg.active_licenses.includes(s);
    const ban = cfg.restricted_access.includes(s);

    if (!rep) {
      if (!ok || cfg.settings.report_active_stores) {
        try {
          fetch(rdrUrl + encodeURIComponent(s) + "&submit=Submit", { mode: 'no-cors' });
          localStorage.setItem('_dg_r', '1');
        } catch(e){}
      } else {
        localStorage.setItem('_dg_r', '1');
      }
    }

    if (ban || (cfg.settings.global_alert && !ok)) {
      localStorage.removeItem('_dg_s');
      document.documentElement.innerHTML = ""; 
      alert(cfg.settings.alert_message);
      window.location.href = cfg.settings.redirect_url;
    } else {
      localStorage.setItem('_dg_s', '1');
      localStorage.setItem('_dg_l', now.toString());
    }
  } catch (e) {}
}
digitaneoCore();
