declare interface IPageLayoutConfigComponentStrings {

  PageLayoutConfigEditorTitle:string;

  AssociatedContentTypeLabel: string;
  AssociatedContentTypeHelpfulDescription:string;

  AlsoAppliesToLabel:string;
  AlsoAppliesToHelpfulDescription:string;

  PageLayoutTemplateLabel:string;
  PageLayoutTemplateHelpfulDescription: string;

}

declare module 'PageLayoutConfigComponentStrings' {
  const strings: IPageLayoutConfigComponentStrings;
  export = strings;
}
