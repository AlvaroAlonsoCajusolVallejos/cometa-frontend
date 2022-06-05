import React from "react";

import DisplayTemplateContext from "../templates/DisplayNew/contexts/displayTemplate.context";

export interface ToolbarTitleState {
  setTitle: (module: string, kitchen?: string) => void;
}

const useToolbarTitle = (): ToolbarTitleState => {
  const { setToolbarTitle } = React.useContext(DisplayTemplateContext);

  const setTitle = (module: String, kitchenName?: string) => {
    if (setToolbarTitle) {
      if (kitchenName) {
        const kitchen = kitchenName.replace("-", " ");
        setToolbarTitle(`${module} - ${kitchen}`);
      } else {
        setToolbarTitle(null);
      }
    }
  };

  return {
    setTitle,
  };
};

export default useToolbarTitle;
