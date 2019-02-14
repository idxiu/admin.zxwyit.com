<template>
  <div>
    <div id="left">
      <p>
        <router-link to="/home/page1">页面1</router-link>
      </p>
      <p>
        <router-link to="/home/page2">页面2</router-link>
      </p>
      <p>
        <router-link to="/home/page3">页面3</router-link>
      </p>
    </div>
    <div id="right">
      <router-view name="right"></router-view>
    </div>
  </div>
</template>
