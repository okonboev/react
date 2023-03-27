import styled from "styled-components";
import {ReactComponent as home} from '../assets/icon/home.svg';
import {ReactComponent as komps} from '../assets/icon/komps.svg';
import {ReactComponent as bookshelf} from '../assets/icon/bookshelf.svg';
import {ReactComponent as past} from '../assets/icon/past.svg';
import {ReactComponent as yourvideos} from '../assets/icon/your-videos.svg';
import {ReactComponent as watchlater} from '../assets/icon/watch-later.svg';
import {ReactComponent as likeds} from '../assets/icon/like-videos.svg';
import {ReactComponent as profile} from '../assets/icon/Profile-Photo.svg';

import phota from '../assets/img/Profile-Photo.png'
import phota1 from '../assets/img/Profile-Photo1.png'
import phota2 from '../assets/img/Profile-Photo2.png'
import phota3 from '../assets/img/Profile-Photo3.png'
import phota4 from '../assets/img/Profile-Photo4.png'
import phota5 from '../assets/img/Profile-Photo5.png'
import phota6 from '../assets/img/Profile-Photo6.png'

const Icon = styled.div``;
Icon.Home = styled(home)``;
Icon.Komps = styled(komps)``;
Icon.Bookshelf = styled(bookshelf)``;
Icon.Past = styled(past)``;
Icon.Yourvideos = styled(yourvideos)``;
Icon.Watchlater = styled(watchlater)``;
Icon.Likeds = styled(likeds)``;
Icon.Img = styled(profile)``;


export const sidebar = [
    {
        id : 1,
        title : "",
        data : [
            {id:1,icon:Icon.Home,names:"Anasayfa"},
            {id:2,icon:Icon.Komps,names:"Keşfet"},
            {id:3,icon:Icon.Bookshelf,names:"Abonelikler"},
        ]
    },
    {
        id : 2,
        title : "",
        data : [
            {id:1,icon:Icon.Past,names:"Kitaplık"},
            {id:2,icon:Icon.Yourvideos,names:"Geçmiş"},
            {id:3,icon:Icon.Watchlater,names:"Videolarınız"},
            {id:4,icon:Icon.Likeds,names:"Daha sonra izle"},
            {id:5,icon:Icon.Likeds,names:"Beğendiğim videolar"},
        ]
    },
    {
        id : 3,
        title : "Subscribed",
        data : [
            {id:1,icon:Icon.Img,names:"The Game"},
            {id:2,icon:Icon.Img,names:"Lean Yo"},
            {id:3,icon:Icon.Img,names:"Best Kuaför"},
            {id:4,icon:Icon.Img,names:"Meyau Seu"},
            {id:5,icon:Icon.Img,names:"Discover Design"},
            {id:6,icon:Icon.Img,names:"Build Game"},
            {id:7,icon:Icon.Img,names:"Vlogger Man"}, 
            {id:7,icon:Icon.Img,names:"Vlogger Man"}, 
            {id:7,icon:Icon.Img,names:"Vlogger Man"}, 
            {id:7,icon:Icon.Img,names:"Vlogger Man"}, 
            {id:7,icon:Icon.Img,names:"Vlogger Man"}, 
            {id:7,icon:Icon.Img,names:"Vlogger Man"}, 
            {id:7,icon:Icon.Img,names:"Vlogger Man"}, 
            {id:7,icon:Icon.Img,names:"Vlogger Man"}, 
            {id:7,icon:Icon.Img,names:"Vlogger Man"}, 
        ]
    },
        {
        id : 4,
        title : "More watch from youtube  ",
        data : [
            {id:1,icon:Icon.Img,names:"The Game"},
        ]
    },
]