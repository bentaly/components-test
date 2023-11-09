declare type MakeTestIdFunctionType = (postfix?: string) => string;
export declare const getMakeTestIdFunc: (componentName: string, testId?: string) => MakeTestIdFunctionType;
export {};
