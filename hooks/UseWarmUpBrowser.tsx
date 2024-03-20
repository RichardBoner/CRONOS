import * as WebBrowser from 'expo-web-browser';
import React from 'react';

export const useWarmUpBrowser = (): void => {
  React.useEffect(() => {
    // eslint-disable-next-line no-void
    void WebBrowser.warmUpAsync();
    return () => {
      // eslint-disable-next-line no-void
      void WebBrowser.coolDownAsync();
    };
  }, []);
};
