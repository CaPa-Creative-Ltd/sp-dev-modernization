import * as React from 'react';
import styles from './FixedWebPartMappingEditor.module.scss';
import { IFixedWebPartMappingEditorProps } from './IFixedWebPartMappingEditorProps';

export class FixedWebPartMappingEditor extends React.Component<IFixedWebPartMappingEditorProps>{

/**
   * Constructor for the page designer class
   * @param props
   */
  constructor(props: IFixedWebPartMappingEditorProps) {
    super(props);


  }


  /**
   *  Render method for the component
   */
  public render(): React.ReactElement<IFixedWebPartMappingEditorProps> {
    return (
      <div>
        Fixed Web Part Mapping Editor
      </div>
    );
  }


}
