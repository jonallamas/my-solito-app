import { Svg, Path } from 'react-native-svg'

export default function Home({ color }) {
  return (
    <Svg width="21" height="23" viewBox="0 0 21 23" fill="none">
      <Path
        d="M1.10156 8.151L10.1016 1.151L19.1016 8.151V19.151C19.1016 19.6814 18.8908 20.1901 18.5158 20.5652C18.1407 20.9403 17.632 21.151 17.1016 21.151H3.10156C2.57113 21.151 2.06242 20.9403 1.68735 20.5652C1.31228 20.1901 1.10156 19.6814 1.10156 19.151V8.151Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.10156 21.151V11.151H13.1016V21.151"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
