<template>
    <div class="header-info-slot d-flex flex-column justify-center">
      <slot />
    </div>
  </template>
  
  <style>
  .header-info-slot {
    position: relative;
    height: 100%;
    margin-left: 1.3rem;
    font-size: .6em;
    color: var(--v-secondary-lighten4);
    /* opacity: .6; */
    line-height: 1.6em;
    letter-spacing: 0px;
    font-family: Consolas, 'Courier New', Courier, monospace;
  }
  
  .header-info-slot::before {
    content: " ";
    height: 85%;
    width: 1px;
    position: absolute;
    left: -.5rem;
    top: 7.5%;
    background-color: currentColor;
    opacity: .5;
  }
  
  </style>