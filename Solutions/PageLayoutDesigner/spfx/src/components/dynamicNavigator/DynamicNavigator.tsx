import * as React from 'react';
import styles from './DynamicNavigator.module.scss';
import { IDynamicNavigatorProps } from './IDynamicNavigatorProps';

export class DynamicNavigator extends React.Component<IDynamicNavigatorProps, {}> {



  /**
   *  Render method for the component
   */
  public render(): React.ReactElement<IDynamicNavigatorProps> {
    return (
      <div>
        DynamicNavigator Component
      </div>
    );
  }

}
