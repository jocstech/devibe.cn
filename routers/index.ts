/*
 * @Author       : Yulong Fang <aionv@qq.com>
 * @Date         : 2024-12-13 11:24:10
 * @LastEditors  : Yulong Fang <aionv@qq.com>
 * @LastEditTime : 2024-12-13 11:37:39
 * @Description  :  
 */
interface MenuItem {
  to: string;
  en: string;
  text: string;
}

export const menuData = {
  mainHeader:
    [
      {
        to: '/',
        en: '开发者氛围',
        text: '开发者氛围',
      },
      {
        to: '/awesome',
        en: 'awesome',
        text: '趣园',
      },
      {
        to: '/articles',
        en: 'articles',
        text: '文章',
      },
      {
        to: '/interviews',
        en: 'interviews',
        text: '面试',
      },
      {
        to: '/projects',
        en: 'home',
        text: '项目',
      },
      {
        to: '/frontend',
        en: 'frontend',
        text: '前端',
      },
      {
        to: '/backend',
        en: 'backend',
        text: '后端',
      },
      {
        to: '/resume',
        en: 'resume',
        text: '履历',
      },
    ]
}



