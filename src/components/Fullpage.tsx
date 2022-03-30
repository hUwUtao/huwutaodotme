import React, { useState } from 'react'
import ReactFullpage, {
  fullpageApi as TfullpageApi,
  fullpageOptions as TfullpageOptions,
} from '@fullpage/react-fullpage'
import 'fullpage.js/dist/jquery.fullpage.css'

interface IProps {
  components: Array<IPageItem>
  children?: null
  options?: TfullpageOptions
}

interface IPageItem {
  tooltip?: string
  navicolor?: string
  component: React.ReactNode
}

export const Fullpage: React.FC<IProps> = (props: IProps) => {
  const [curpg, scurpg] = useState(0)
  return (
    <ReactFullpage
      licenseKey="Trai Do Di"
      cards={true}
      cardsOptions={{
        perspective: 100,
        fadeContent: true,
        fadeBackground: true,
      }}
      // allow mobile swipe
      touchSensitivity={5}
      navigation={true}
      navigationTooltips={props.components.map((item) => `${item.tooltip}`)}
      dragAndMove={true}
      // navigationPosition="right"
      slidesNavigation={true}
      slidesNavPosition="bottom"
      css3={true}
      // waterEffect={true}
      // anchors={props.components.map((_, index) => `section${index + 1}`)}
      //set color of navigation
      afterLoad={(origin, destination, direction) => {
        scurpg(destination.index)
      }}
      onSlideLeave={(origin, destination, direction) => {
        scurpg(destination.index)
      }}
      render={(comp: {
        state: any
        fullpageApi: TfullpageApi
      }): React.ReactElement | void => {
        return (
          <ReactFullpage.Wrapper>
            {props.components.map((pitem: IPageItem, index: number) => (
              <div
                key={index}
                className="section slide"
                // data-anchor={`section${index + 1}`}
              >
                {pitem.component}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )
      }}
    />
  )
}
