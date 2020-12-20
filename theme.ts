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

export interface IComponentStyle {
  [key: string]: any;
}
export interface ITheme {
  name: string;
  description: string;
  url: string;
  author: string;
  dependencies: string[];
  defs: {
    [name: string]: any;
  };
  components: {
    [name: string]: IComponentStyle;
  };
}
