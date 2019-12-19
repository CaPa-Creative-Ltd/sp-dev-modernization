import { INavigationReference } from "../../common/Interfaces";

export interface IDynamicNavigatorProps {

  /**
   *  Passing a list of navigation options
   */
  NavigationReferences?: INavigationReference[];

  /**
   *  Optional reference to which navigation item was clicked
   */
  onNavClick?: (navLinkClicked: INavLinkClicked) => void;
}


export interface INavLinkClicked {
  LayoutId: string;
  Key: string;
}

