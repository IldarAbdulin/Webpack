import * as $ from 'jquery'
import Post from "@models/Post";
import './styles/styles.css'
import './styles/scss.scss'
import wallpaper from './assets/1'

const post = new Post('Webpack Post Title', wallpaper);
$('pre').addClass('code').html(post.toString())