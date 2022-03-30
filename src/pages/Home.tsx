import React from 'react'
// import Counter from '../components/counter/Counter'
import { SnapScrollContainer as ScrollContainer } from '../components/SnapScrollContainer'

export const Home: React.FC = () => {
  return (
    <div className="container">
      <ScrollContainer
        comps={[
          {
            item: (
              <>
                <h1>
                  <span>Hello</span> <span>World</span>
                </h1>
              </>
            ),
          },
          {
            item: (
              <>
                <h1>
                  <span>Hello</span> <span>World</span>
                </h1>
              </>
            ),
          },
          {
            item: (
              <>
                <h1>
                  <span>Hello</span> <span>World</span>
                </h1>
              </>
            ),
          },
          {
            item: (
              <>
                <h1>
                  <span>Hello</span> <span>World</span>
                </h1>
              </>
            ),
          },
        ]}
      />
    </div>
  )
}
