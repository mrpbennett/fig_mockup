import React from 'react';

import Layout from '../components/layout';
import InnerLayout from '../components/innerLayout';
import SettingsLinks from '../routes/settings/main';

export default function Settings() {
  return (
    <Layout>
      <InnerLayout title="Settings">
        <SettingsLinks />
      </InnerLayout>
    </Layout>
  );
}
