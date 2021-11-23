import {NavMenu} from './NavMenu';
import {Sample} from 'types';
import {SampleDisplay} from 'components/SampleDisplay';
import {Layout, Typography} from 'antd';
import React, {useState} from 'react';

export const AppLayout = () => {
  const [sample, setSample] = useState<Sample>('Hide');
  return (
    <Layout>
      <Layout.Sider collapsible>
        <NavMenu onChange={setSample}/>
      </Layout.Sider>
      <Layout>
        <Layout.Header>
          <Typography.Title style={{color: '#fff'}}>My Reactor</Typography.Title>
        </Layout.Header>
        <Layout.Content style={{padding: '1em', minHeight: '100vh'}}>
          <SampleDisplay sample={sample}/>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
