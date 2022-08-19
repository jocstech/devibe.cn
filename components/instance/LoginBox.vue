<template>
  <div class="login-box prose">
    <div class="header text-center">
      <h3>账号登陆</h3>
    </div>
    <form class="form" action="#">
      <div class="input-group">
        <label for="username">用户名</label>
        <input name="username" type="text" placeholder="用户名/ID" required />
      </div>
      <div class="input-group">
        <label for="password">密码</label>
        <input name="password" type="password" placeholder="密码" required />
      </div>
      <div class="input-group">
        <div class="term-line">
          <input type="radio" />
          <span> 我已阅读并同意<em>服务协议</em>和<em>隐私政策</em></span>
        </div>
        <input class="btn cursor-pointer" type="submit" value="立即登陆" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
