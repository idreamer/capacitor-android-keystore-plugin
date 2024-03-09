package com.victorchoi.plugins.ikeystoreplugin;

import android.content.Context;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

@CapacitorPlugin(name = "IKeystorePlugin")
public class IKeystorePluginPlugin extends Plugin {
    private IKeystorePlugin implementation = new IKeystorePlugin();
    private Context context;
    @Override
    public void load() {
        context = getContext();
    }

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");
        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void encrypt(PluginCall call) {
        String value = call.getString("value");
        String encrypted = EncryptionUtils.encrypt(context, value);
        JSObject json = new JSObject();
        json.put("value", encrypted);
        call.resolve(json);
    }

    @PluginMethod
    public void decrypt(PluginCall call) {
        String value = call.getString("value");
        String decrypted = EncryptionUtils.decrypt(getContext(), value);
        JSObject json = new JSObject();
        json.put("value", decrypted);
        call.resolve(json);
    }
}
