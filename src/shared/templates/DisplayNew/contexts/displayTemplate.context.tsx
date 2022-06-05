import React from 'react';

type ToolbarTitle = string | null;
type SetToolbarTitle = (toolbarTitle: ToolbarTitle) => void;

interface DisplayTemplateContextState {
  toolbarTitle?: ToolbarTitle;
  setToolbarTitle?: SetToolbarTitle;
}

const initialState: DisplayTemplateContextState = {};

const DisplayTemplateContext = React.createContext(initialState);

interface DisplayTemplateProviderProps {
  children: React.ReactElement;
}

export const DisplayTemplateProvider = (
  props: DisplayTemplateProviderProps,
): React.ReactElement => {
  const { children } = props;

  const [toolbarTitle, setToolbarTitle] = React.useState<ToolbarTitle | null>();

  return (
    <DisplayTemplateContext.Provider
      value={{
        toolbarTitle,
        setToolbarTitle,
      }}
    >
      {children}
    </DisplayTemplateContext.Provider>
  );
};

export default DisplayTemplateContext;
