<template>
  <div>
      <div class="text-center" style="margin:25px;">
        <h1>Welcome to Invest Management System</h1>
      </div>

    <div class="d-flex" style="margin-top:25px;">
      <div style="flex:1;">
        <iframe 
          src="https://sslecal2.forexprostools.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=37,35,72,5,4,26,17,41&calType=day&timeZone=27&lang=53" 
          width="650" 
          height="467" 
          frameborder="0" 
          allowtransparency="true" 
          marginwidth="0" 
          marginheight="0">
        </iframe>
      </div>

      <div style="margin-left:10px; flex:1;">
        <iframe 
          height="375" 
          width="217" 
          src="https://ssltools.forexprostools.com/currency-converter/index.php?from=10&to=12&force_lang=53"></iframe>
          <br />
          <table width="217">
            <tr>
              <td>
                <span style="font-size: 11px;color: #333333;text-decoration: none;">ตัวแปลงสกุลเงินนี้ควบคุมดูแลระบบทำงานโดย <a href="https://th.investing.com/" rel="nofollow" target="_blank" style="font-size: 11px;color: #06529D; font-weight: bold;" class="underline_link">Investing.com ประเทศไทย</a></span>
              </td>
            </tr>
          </table>
      </div>

      <div class="flex-box" style="margin-left:10px; flex:1;">
        <div>
          <iframe 
          src="https://th.widgets.investing.com/single-currency-crosses?theme=darkTheme&currency=10" 
          width="310px" 
          height="260px" 
          frameborder="0" 
          allowtransparency="true" 
          marginwidth="0" marginheight="0"></iframe>
        </div>
      </div>
    </div>

    <div class="d-flex" style="margin-top:25px;">
      <div class="flex-box">
        <iframe 
          height="467" 
          width="1200" 
          src="https://ssltvc.forexprostools.com/?pair_ID=1&height=467&width=1200&interval=1800&plotStyle=candles&domain_ID=53&lang_ID=53&timezone_ID=21">
        </iframe>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>