import Svg, { Path } from 'react-native-svg';

import type { SvgProps } from 'react-native-svg';

const SvgPalette = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 24 24" accessibilityRole="image" {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 12c0-5.3 4.532-9.5 10-9.5S22 6.7 22 12c0 1.874-.504 3.22-1.651 3.934-1.048.652-2.352.571-3.373.438-.363-.047-.746-.11-1.104-.17a61.205 61.205 0 0 0-.471-.076 9.544 9.544 0 0 0-1.33-.14c-.773-.012-1.031.17-1.177.461-.082.166-.101.393.03.78.116.347.304.686.52 1.078l.119.215c.12.22.255.477.351.73.088.233.203.613.118 1.029-.105.51-.456.852-.866 1.028-.354.153-.765.193-1.166.193-5.468 0-10-4.2-10-9.5Zm8.5-2.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-1.75 2.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPalette;