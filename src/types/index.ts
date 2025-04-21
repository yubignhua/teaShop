import React from 'react';

// 扩展现有模块的声明
declare module 'react' {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

export {}; 