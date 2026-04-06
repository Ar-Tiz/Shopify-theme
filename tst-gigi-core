async function digitaneoCore() {
  const s = window.location.hostname;
  // تم تغيير الرابط لضمان قبول المتصفح للملف (CORS Friendly)
  const cfgUrl = "https://cdn.jsdelivr.net/gh/Ar-Tiz/Shopify-theme@main/Licenses.json";
  const rdrUrl = "https://docs.google.com/forms/d/e/1FAIpQLScys1XhUUbg7iJ6VI7GLSb7IqwzC4amxvH9t5N4PyB68eQl0Q/formResponse?entry.595339936="; 

  const now = new Date().getTime();
  const last = localStorage.getItem('_dg_l');
  const st = localStorage.getItem('_dg_s');
  const rep = localStorage.getItem('_dg_r');

  // 1. نظام الرادار (إرسال الدومين)
  if (!rep) {
    try {
      fetch(rdrUrl + encodeURIComponent(s) + "&submit=Submit", { mode: 'no-cors' });
      localStorage.setItem('_dg_r', '1');
    } catch(e){}
  }

  // 2. فحص الـ 30 يوم
  if (last && (now - last < 2592000000) && st === '1') return;

  try {
    // جلب البيانات مع كسر الكاش لضمان الدقة
    const res = await fetch(cfgUrl + "?t=" + now, { cache: 'no-store' });
    const cfg = await res.json();

    const ok = cfg.active_licenses.includes(s);
    const ban = cfg.restricted_access.includes(s);

    // 3. منطق الحظر والحماية
    if (ban || (cfg.settings.global_alert && !ok)) {
      localStorage.removeItem('_dg_s');
      document.documentElement.innerHTML = ""; 
      alert(cfg.settings.alert_message);
      window.location.href = cfg.settings.redirect_url;
    } else {
      // 4. حفظ حالة الترخيص بنجاح
      localStorage.setItem('_dg_s', '1');
      localStorage.setItem('_dg_l', now.toString());
    }
  } catch (e) {
    // في حالة وجود خطأ في الاتصال، يستمر المتجر بالعمل بشكل طبيعي
  }
}
digitaneoCore();
