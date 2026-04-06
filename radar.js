<script>
  // وظيفة التحقق من وجود الحماية
  (function() {
    function checkSecurity() {
      // نتحقق هل الدالة المشفرة القادمة من GitHub موجودة؟
      if (typeof digitaneoCore !== 'function') {
        // 1. مسح محتوى المتجر بالكامل
        document.body.innerHTML = `
          <div style="height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; background:#000; color:#fff; font-family:sans-serif; text-align:center; padding:20px;">
            <h1 style="font-size:50px;">⚠️</h1>
            <h2>System Integrity Error</h2>
            <p>Essential core files are missing. Please reinstall the original Artiz Theme or contact Digitaneo support.</p>
            <a href="https://digitaneo.com" style="color:#00ffcc; text-decoration:none; border:1px solid #00ffcc; padding:10px 20px; margin-top:20px;">Contact Support</a>
          </div>`;
        
        // 2. إيقاف أي عمليات أخرى
        window.stop(); 
      }
    }

    // الفحص الأول عند التحميل
    window.addEventListener('load', checkSecurity);
    
    // الفحص الثاني بعد 5 ثوانٍ (للإحتياط من أي محاولة تعطيل متأخرة)
    setTimeout(checkSecurity, 5000);
  })();
</script>
