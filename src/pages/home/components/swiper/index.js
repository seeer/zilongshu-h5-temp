
import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import Bitmap from 'assets/images/home/Bitmap.png'

export default class extends React.PureComponent {
  state = {
    data: [
      { img: Bitmap, to: '#/index/free-course-list' },
      { img: Bitmap, to: '#/index/free-course-list' },
      { img: Bitmap, to: '#/index/free-course-list' },
    ]
  }
  render() {
    return (
      <WingBlank>
        <Carousel

          autoplay={true}
          infinite
          autoplayInterval={5000}
          dotStyle={{ width: '0.36rem', borderRadius:'0.16rem', height: '0.08rem',marginBottom: '0.16rem' }}
          dotActiveStyle={{ width: '0.36rem', backgroundColor:'#297cd5', borderRadius:'0.16rem',height: '0.08rem', marginBottom: '0.16rem' }}
        >
          {this.state.data.map(item => (
            <a
              key={item.img}
              href={item.to}
              style={{ display: 'inline-block', width: '100%', height: '4.3rem' }}
            >
              <img
                src={item.img}
                alt=""
                style={{width: '100%', height: '100%'}}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}