import { Global }          from '@emotion/react'
import { css }             from '@emotion/react'

import React               from 'react'

import { injectFontFaces } from './inject-fonts'

export const GlobalStyles = () => {
  injectFontFaces([{ family: 'WaterBrush', type: 'Regular', weight: 400 }])

  return (
    <Global
      styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');

      html,
      body {
        margin: 0;
        height: 100%;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
      }

      #__next {
        height: 100%;
      }
    `}
    />
  )
}
