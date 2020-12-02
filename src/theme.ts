export interface ComponentStyle {
  [key: string]: any;
}
export interface Theme {
  name: string;
  description: string;
  url: string;
  author: string;
  dependencies: string[];
  general: {
    [key: string]: any;
  };
  components: {
    [componentId: string]: ComponentStyle;
  };
}
