import React, { createContext, useContext } from 'react';
import featureFlags from '../../data/FeatureFlag';

const FeatureFlagContext = createContext(featureFlags);

export function FeatureFlagProvider({ children }) {
  return (
    <FeatureFlagContext.Provider value={featureFlags}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export function useFeatureFlags() {
  return useContext(FeatureFlagContext);
}
