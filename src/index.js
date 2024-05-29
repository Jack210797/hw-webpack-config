import * as $ from 'jquery'

import Post from '@model/post'
import json from '@/assets/data'
import logo from '@assets/logo.png'
import '@css/style.css'
import './less/style.less'
import './sass/style.scss'
import './sass/style.sass'
import '@model/lodash'

const post = new Post('Webpack Post Title', logo)

$('pre').html(post.toString())

$('pre').addClass('code').html(post.toString())

console.log('JSON to string:' , json)

async function start() {
  return await new Promise(r => setTimeout(() => r('Async done.'), 2000))
}

start().then(res => console.log(res))