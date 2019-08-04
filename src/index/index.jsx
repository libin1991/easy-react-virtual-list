import './index.less'

import React from 'react'
import faker from 'faker/locale/zh_CN'

import VirtualizedList from '../virtual-list/index'
import Image from './Image'

const pageSize = 50

function fakerData(start = 0) {
  const a = [];
  const img = ['http://wdxx.ynkl003.com/upfiles/image/20190320/20190320162678587858.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20181217/20181217233176357635.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20181217/20181217233194589458.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20190320/20190320155742254225.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20181217/20181217233396189618.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20190320/20190320160025792579.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20181217/20181217233393089308.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20190320/20190320162788848884.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20190320/2019032016020716716.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20181217/20181217233451805180.png',
    'http://wdxx.ynkl003.com/upfiles/image/20190320/2019032016030170170.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20181218/20181218193235263526.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20190320/20190320160466806680.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20190320/20190320160796889688.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20181218/20181218193331743174.jpg',
    'http://wdxx.ynkl003.com/upfiles/image/20181218/20181218193482428242.jpg'];
  for (let i = start; i < start + pageSize; i++) {
    a.push({
      id: i,
      image: img[Math.round(Math.random() * 15)],
      words: faker.lorem.words(),
      paragraphs: faker.lorem.sentences()
    })
  }

  return a;
}

const onLoading = () => {
  return <div className='loading'>Loading...</div>
}

const onEnded = () => {
  return <div className='ending'>No more data.</div>
}

function noContentRenderer() {
  return <div className='ending'>No data to render.</div>
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: fakerData(),
      hasMore: true
    }

    this.renderItem = this.renderItem.bind(this)
    this.loadNextPage = this.loadNextPage.bind(this)
  }

  renderItem({ index, isScrolling }) {
    const { id, image, words, paragraphs } = this.state.data[index]
    console.log(' list is scrolling', isScrolling)
    // Needn't to set key prop
    return (
      <div className='list-item'>
        <p>#{index} {words}</p>
        <Image src={image} alt={id} />
        <p>{paragraphs}</p>
      </div>
    )
  }

  loadNextPage() {
    const data = [].concat(this.state.data, fakerData(this.state.data.length))
    setTimeout(() => {
      this.setState({
        data,
        hasMore: data.length < 300
      })
    }, 1000)
  }

  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState({
  //       data: [],
  //       hasMore: false
  //     })
  //   }, 2000)
  // }

  render() {
    return (
      <div className='demo-wrap'>
        <h3>VirtualizedList</h3>
        <div className='list-container' id='container'>
          <VirtualizedList
            hasMore={this.state.hasMore}
            itemCount={this.state.data.length}
            estimatedItemHeight={180}
            onLoading={onLoading}
            onEnded={onEnded}
            noContentRenderer={noContentRenderer}
            loadMoreItems={this.loadNextPage}
            renderItem={this.renderItem}
          />
        </div>
      </div>
    )
  }
}
