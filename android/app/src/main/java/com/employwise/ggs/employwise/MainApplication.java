package com.employwise.ggs.employwise;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.devfd.RNGeocoder.RNGeocoderPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;

import org.pweitz.reactnative.locationswitch.LocationSwitchPackage;

import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.idehub.GoogleAnalyticsBridge.GoogleAnalyticsBridgePackage;
import com.evollu.react.fcm.FIRMessagingPackage;
import com.microsoft.codepush.react.CodePush;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new RNDeviceInfo(),
          new MainReactPackage(),
            new RNGeocoderPackage(),
          new RNFetchBlobPackage(),
          new GoogleAnalyticsBridgePackage(),
          new FIRMessagingPackage(),
          new PickerPackage(),
          new LocationSwitchPackage(),
          new CodePush("PPzoKOE5PM_wtOhaooFc9hxBSgO9Hk-HkVS1X", getApplicationContext(), BuildConfig.DEBUG)

      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}