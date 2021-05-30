import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M55.89 2.24c-.51-.51-.51-1.34 0-1.86.51-.51 1.34-.51 1.86 0 2.75 2.75 1.7 4.7.49 6.97-.86 1.61-1.85 3.45-.28 6.17.36.63.15 1.43-.48 1.79-.63.36-1.43.15-1.79-.48-2.3-3.98-.94-6.51.24-8.72.71-1.33 1.34-2.49-.04-3.87zM5.41 55.12h11.26c-.01-1.41-.05-2.49-.07-3.42-.1-3.54-.16-5.31.99-6.6 1.24-1.39 2.91-1.33 6.27-1.22 1.09.04 2.42.08 4.32.08 1.02 0 1.84.82 1.84 1.84s-.82 1.84-1.84 1.84c-1.59 0-3.15-.05-4.44-.1-2.21-.08-3.31-.11-3.41 0-.18.2-.14 1.49-.07 4.05.03 1.04.07 2.25.08 3.52h20.91v-7.28c0-.78.82-1.42 1.84-1.42s1.84.63 1.84 1.42v7.28h20.91c.02-1.27.05-2.47.08-3.52.08-2.56.11-3.85-.07-4.05-.1-.11-1.2-.07-3.41 0-1.28.04-2.85.1-4.44.1-1.02 0-1.84-.82-1.84-1.84s.82-1.84 1.84-1.84c1.91 0 3.23-.05 4.32-.08 3.36-.12 5.03-.17 6.27 1.22 1.14 1.29 1.09 3.06.99 6.6-.03.93-.06 2.01-.07 3.42h26.37c1.49 0 2.84.61 3.82 1.59.04.04.08.08.11.12.91.97 1.47 2.27 1.47 3.7v5.01c3.73.03 6.75 3.07 6.75 6.81 0 3.74-3.02 6.78-6.75 6.81v4.42c0 1.48-.61 2.83-1.59 3.81-.98.98-2.33 1.58-3.81 1.58h-8.71v1.92c0 .44-.82.79-1.84.79s-1.84-.35-1.84-.79v-1.92H14.84v1.92c0 .44-.82.79-1.84.79s-1.84-.35-1.84-.79v-1.92H5.41c-1.48 0-2.83-.61-3.82-1.59A5.349 5.349 0 010 83.57V60.53c0-1.48.61-2.83 1.59-3.81.98-.99 2.33-1.6 3.82-1.6zm90.48 3.68H5.41a1.74 1.74 0 00-1.73 1.73v23.04c0 .47.2.91.51 1.22.31.31.74.5 1.22.5H95.9c.48 0 .91-.19 1.22-.5l.01-.01c.31-.31.5-.74.5-1.22V60.53c0-.44-.17-.85-.44-1.16-.02-.02-.05-.04-.07-.06-.32-.31-.75-.51-1.23-.51zm22.79-35.58H97.81c-1.65 0-3.09.97-3.77 2.36H77.45l.55-2.92c.15-.82-.39-1.61-1.2-1.76-.09-.02-.19-.03-.28-.03H13.49a1.515 1.515 0 00-1.43 2l2.26 8.57c.66 2.48 1.76 4.83 3.42 6.49 1.51 1.51 3.43 2.45 5.84 2.45h43.49c2.46 0 4.5-.97 6.06-2.53 1.66-1.66 2.75-3.99 3.23-6.51l.39-2.08h17.29c.69 1.39 2.12 2.36 3.77 2.36h20.87c2.31 0 4.2-1.89 4.2-4.2 0-2.31-1.89-4.2-4.2-4.2zM73.4 30.78c-.36 1.94-1.18 3.7-2.4 4.93-1.02 1.02-2.33 1.65-3.92 1.65h-43.5c-1.52 0-2.75-.6-3.71-1.56-1.25-1.25-2.11-3.11-2.64-5.12l-1.79-6.78H74.7c-.44 2.3-.86 4.57-1.3 6.88zM30.15 2.24c-.51-.51-.51-1.34 0-1.86.51-.51 1.34-.51 1.86 0 2.75 2.75 1.7 4.7.48 6.97-.86 1.61-1.85 3.45-.28 6.17.36.63.15 1.43-.48 1.79-.63.36-1.43.15-1.79-.48-2.3-3.98-.94-6.51.24-8.72.72-1.33 1.35-2.49-.03-3.87zm8.58 0c-.51-.51-.51-1.34 0-1.86.51-.51 1.34-.51 1.86 0 2.75 2.75 1.7 4.7.49 6.97-.86 1.61-1.85 3.46-.28 6.18.36.63.14 1.43-.48 1.79-.63.36-1.43.14-1.79-.48-2.3-3.98-.94-6.5.24-8.71.71-1.35 1.34-2.51-.04-3.89zm8.58 0c-.51-.51-.51-1.34 0-1.86.51-.51 1.34-.51 1.86 0 2.75 2.75 1.7 4.71.49 6.97-.86 1.61-1.85 3.46-.28 6.18.36.63.14 1.43-.48 1.79-.63.36-1.43.14-1.79-.48-2.3-3.98-.94-6.5.24-8.71.71-1.35 1.34-2.51-.04-3.89z" />
    </Svg>
  );
};

export default Icon;