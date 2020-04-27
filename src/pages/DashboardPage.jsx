import React from 'react';

import './DashboardPage.css';

import { Sidebar } from '../components/sidebar/Sidebar';
import { Header } from '../components/Header';
import { Panel } from '../components/Panel';
import { Wrap } from '../components/Wrap';
import { Container } from '../components/Container';
import { Content } from '../components/Content';
import { Page } from '../components/Page';
import { RightSidebar } from '../components/RightSidebar';

export function DashboardPage() {
  return (
    <Page>
      <Sidebar />

      <Wrap>
        <Header title='Главная' />

        <Container>
          <Content></Content>

          <RightSidebar>
            <Panel title='Инструменты' />
          </RightSidebar>
        </Container>
      </Wrap>
    </Page>
  );
}
