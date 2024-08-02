import React from 'react';
import { FeatureFlagProvider, useFeatureFlags } from './FeatureFlagProvider';

function NewFeatureComponent() {
    return <div>This is a new feature!</div>;
}

function OldFeatureComponent() {
    return <div>This is an old feature.</div>;
}

function AppContent() {
    const featureFlags = useFeatureFlags();
  
    return (
      <div>
        {featureFlags.newFeature ? <NewFeatureComponent /> : <OldFeatureComponent />}
      </div>
    );
  }
  

function Layout() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        <div className="p-6">
        <FeatureFlagProvider children={<AppContent />} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
