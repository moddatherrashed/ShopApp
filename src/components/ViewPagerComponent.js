import React from 'react'
import Carousel from 'react-native-snap-carousel'

const ViewPagerComponent = (props) => {
    return (
        <Carousel
            layout={'default'}
            ref={(c) => { this._carousel = c; }}
            data={props.offers}
            renderItem={props.renderItem}
            sliderWidth={props.sliderWidth}
            itemWidth={props.itemWidth}
            hasParallaxImages={true}
            inactiveSlideScale={0.94}
            inactiveSlideOpacity={0.7}
            // inactiveSlideShift={20}
            containerCustomStyle={{
                overflow: 'visible'
            }}
            contentContainerCustomStyle={{
               // paddingVertical: 5 
            }}
            loop={true}
            loopClonesPerSide={2}
            autoplay={true}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={props.slider1ActiveSlide}
        />
    )
}



export default ViewPagerComponent