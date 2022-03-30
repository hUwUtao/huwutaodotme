import React, { FC, useEffect, useState } from 'react'
import { useScroll, useDrag } from 'react-use-gesture'
class Snapitem {
  item: React.ReactNode
}
interface Props {
  children?: React.ReactNode
  comps: Array<Snapitem>
}
export const SnapScrollContainer: FC<Props> = (props: Props) => {
  const [current, setCurrent] = useState(0)
  function enableIfThis(item: Number, content: any, ifNull: any) {
    return item === current ? content : ifNull
  }
  // Capture scroll and swipe events for the container
  // Only capture y axis
  const scroll = useScroll(
    ({ delta }) => {
      // console.log(delta)
      if (delta[1] > 0) {
        setCurrent(current + 1)
      } else if (delta[1] < 0) {
        setCurrent(current - 1)
      }
    },
    {
      domTarget: document.querySelector('.container'),
      eventOptions: { passive: false },
      initial: [0, 0],
      axis: 'y',
    }
  )
  // Capture drag events for the container
  // Only capture y axis
  // const [{ xy }, drag] =
  const drag = useDrag(
    ({ delta }) => {
      // console.log(delta)
      if (delta[1] > 0) {
        setCurrent(current + 1)
      } else if (delta[1] < 0) {
        setCurrent(current - 1)
      }
    },
    {
      domTarget: document.querySelector('.container'),
      eventOptions: { passive: false },
      initial: [0, 0],
      axis: 'y',
    }
  )

  // bind events
  useEffect(() => {
    scroll()
    drag()
  })
  return (
    <div className="snapcon">
      {props.comps.map((item, index) => (
        <div
          key={index}
          className={`snapi ${enableIfThis(index, 'snapishow', 'snapishide')}`}
          // onClick={() => setCurrent(index)}
        >
          {item.item}
        </div>
      ))}
    </div>
  )
}
