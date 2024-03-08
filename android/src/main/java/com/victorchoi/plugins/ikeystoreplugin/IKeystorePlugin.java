package com.victorchoi.plugins.ikeystoreplugin;

import android.util.Log;

public class IKeystorePlugin {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
