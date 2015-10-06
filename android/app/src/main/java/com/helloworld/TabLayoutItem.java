package com.helloworld;

import android.support.design.widget.TabLayout;
import android.support.design.widget.TabLayout.Tab;
import android.content.Context;
import android.view.View;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;

public class TabLayoutItem extends ReactViewGroup {
    public TabLayoutItem(Context context) {
        super(context);
    }
}
