import { Index } from 'solid-js'
import { Carousel, type CarouselRootProps } from '../'

export const ComponentUnderTest = (props: CarouselRootProps) => {
  const images = [
    'https://tinyurl.com/5b6ka8jd',
    'https://tinyurl.com/7rmccdn5',
    'https://tinyurl.com/59jxz9uu',
  ]
  return (
    <Carousel.Root {...props}>
      <Carousel.Control>
        <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
        <Carousel.NextTrigger>Next</Carousel.NextTrigger>
      </Carousel.Control>
      <Carousel.IndicatorGroup>
        <Index each={images}>
          {(_, index) => (
            <Carousel.Indicator index={index} data-testid="indicator">
              {index + 1}
            </Carousel.Indicator>
          )}
        </Index>
      </Carousel.IndicatorGroup>
      <Carousel.Viewport>
        <Carousel.ItemGroup>
          <Index each={images}>
            {(image, index) => (
              <Carousel.Item index={index} data-testid="item">
                <img src={image()} />
              </Carousel.Item>
            )}
          </Index>
        </Carousel.ItemGroup>
      </Carousel.Viewport>
    </Carousel.Root>
  )
}
