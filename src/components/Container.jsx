import React from 'react'
import Card from './Card'
import './style.css'

const data=[
  {id:1,title : 'banan ', info:'mevalar berilgan1',src:'https://cdn.shopify.com/s/files/1/0018/8327/5325/products/6_370x.jpg?v=1669704783%20370w' },
  {id:2,title:'colorful', info:'mevalar berilgan2',src:'https://media.cntraveler.com/photos/546976f2cbbd2620680d9f2f/master/pass/rare-fruits-tout.jpg'},
  {id:3,title:'nok ', info:'mevalar berilgan3',src:'https://hips.hearstapps.com/hmg-prod/images/pile-of-ripe-fresh-green-pears-royalty-free-image-133810495-1564414665.jpg' },
  {id:4,title:'qizil nok', info:'mevalar berilgan4',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQFxawL8hGHUNd2yW5j2_UZfGwoCMUVGmkCxUER8de_2mHdNc1lDC-5Q0uIyWmJElktY&usqp=CAU'},
  {id:4,title:'qizil nok', info:'mevalar berilgan4',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQFxawL8hGHUNd2yW5j2_UZfGwoCMUVGmkCxUER8de_2mHdNc1lDC-5Q0uIyWmJElktY&usqp=CAU'},
  {id:4,title:'qizil nok', info:'mevalar berilgan4',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQFxawL8hGHUNd2yW5j2_UZfGwoCMUVGmkCxUER8de_2mHdNc1lDC-5Q0uIyWmJElktY&usqp=CAU'},
  {id:5, title:'olma   ', info:'mevalar berilgan5',src:'https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834' },
  {id:6,title:'kivi   ', info:'mevalar berilgan6',src:'https://hips.hearstapps.com/hmg-prod/images/full-frame-shot-of-kiwi-slices-royalty-free-image-742260967-1564092068.jpg'},
  {id:7, title:'asarti ', info:'mevalar berilgan7',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJtfcEMDG_KCr4IcDO8IZlBBLuvhtozBwtw&usqp=CAU'},
  {id:8, title:'ananas va banan', info:'mevalar berilgan8',src:'https://www.dole.com/-/media/project/dole/produce-images/headers/dole-produce-fruit-medley.png?rev=1416123f2d094cd1b7494365948214be&hash=F89C9786C9A5F599A784D7753F82236C'},
  {id:8, title:'ananas va banan', info:'mevalar berilgan8',src:'https://www.dole.com/-/media/project/dole/produce-images/headers/dole-produce-fruit-medley.png?rev=1416123f2d094cd1b7494365948214be&hash=F89C9786C9A5F599A784D7753F82236C'},
  {id:8, title:'ananas va banan', info:'mevalar berilgan8',src:'https://www.dole.com/-/media/project/dole/produce-images/headers/dole-produce-fruit-medley.png?rev=1416123f2d094cd1b7494365948214be&hash=F89C9786C9A5F599A784D7753F82236C'},
  {id:8, title:'ananas va banan', info:'mevalar berilgan8',src:'https://www.dole.com/-/media/project/dole/produce-images/headers/dole-produce-fruit-medley.png?rev=1416123f2d094cd1b7494365948214be&hash=F89C9786C9A5F599A784D7753F82236C'},
]
function Container() {
  return (
    <div className='container'>
      {
        data.map((val)=>(
          <Card src={val.src} title={val.title} info={val.info}/>
        ))
      }
        {/* <Card title='banan ' info='mevalar berilgan1'src='https://cdn.shopify.com/s/files/1/0018/8327/5325/products/6_370x.jpg?v=1669704783%20370w' />
        <Card title='colorful' info='mevalar berilgan2'src='https://media.cntraveler.com/photos/546976f2cbbd2620680d9f2f/master/pass/rare-fruits-tout.jpg' />
        <Card title='nok    ' info='mevalar berilgan3'src='https://hips.hearstapps.com/hmg-prod/images/pile-of-ripe-fresh-green-pears-royalty-free-image-133810495-1564414665.jpg' />
        <Card title='qizil nok' info='mevalar berilgan4'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQFxawL8hGHUNd2yW5j2_UZfGwoCMUVGmkCxUER8de_2mHdNc1lDC-5Q0uIyWmJElktY&usqp=CAU' />
        <Card title='olma   ' info='mevalar berilgan5'src='https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834' />
        <Card title='kivi   ' info='mevalar berilgan6'src='https://hips.hearstapps.com/hmg-prod/images/full-frame-shot-of-kiwi-slices-royalty-free-image-742260967-1564092068.jpg' />
        <Card title='asarti ' info='mevalar berilgan7'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJtfcEMDG_KCr4IcDO8IZlBBLuvhtozBwtw&usqp=CAU' />
        <Card title='ananas va banan' info='mevalar berilgan8'src='https://www.dole.com/-/media/project/dole/produce-images/headers/dole-produce-fruit-medley.png?rev=1416123f2d094cd1b7494365948214be&hash=F89C9786C9A5F599A784D7753F82236C' />
        <Card title='apilsin ' info='mevalar berilgan9'src='https://sunrisefruits.com/wp-content/uploads/2018/06/Productos-Naranja-Sunrisefruitscompany.jpg' />
        <Card title='ananas ' info='mevalar berilgan10'src='https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' />
        <Card title='tarvuz  ' info='mevalar berilgan11'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOW7482u2eox4Hu2_n3tWQsq1XD54JL8igLw&usqp=CAU' /> */}
    </div>
  )
}

export default Container