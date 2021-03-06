package com.currencyconverter;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import androidx.core.view.WindowCompat;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "CurrencyConverter";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState){
    super.onCreate(null);
    WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
  }
}
