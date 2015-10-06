package com.helloworld;

import android.support.design.widget.TabLayout;
import android.support.design.widget.TabLayout.Tab;
import android.view.View;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ThemedReactContext;

import com.helloworld.TabLayoutItem;

public class TabLayoutManager extends ViewGroupManager<TabLayout> {
  public static final String REACT_CLASS = "RCTTabLayout";

  @Override
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  public TabLayout createViewInstance(ThemedReactContext context) {
    return new TabLayout(context);
  }

  @Override
  public void addView(TabLayout parent, View child, int index) {
    if (!child.getClass().isInstance(TabLayoutItem.class)) {
      throw new
          JSApplicationIllegalArgumentException("Subviews should be of type TabLayout.Item");
    }

    Tab childTab = parent.newTab();
    /* childTab.setCustomView(child); */
    childTab.setText("Tab Text");

    parent.addTab(childTab, index);
  }
}
