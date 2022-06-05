import React from 'react';

import { DisplayTemplateProvider } from './contexts/displayTemplate.context';
import DisplayTemplateView from './displayTemplate.view';

interface AppLayoutContainerProps {
  children: React.ReactNode;
}

const DisplayTemplateContainer = (props: AppLayoutContainerProps): React.ReactElement => {
  const { children } = props;

  return (
    <DisplayTemplateProvider>
      <DisplayTemplateView>{children}</DisplayTemplateView>
    </DisplayTemplateProvider>
  );
};

export default DisplayTemplateContainer;
