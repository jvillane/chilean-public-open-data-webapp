import React from "react";
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

import '../assets/base.scss';
import '../css/style.scss';
import '../css/style-messenger.scss';

interface Props {
  longHeader?: boolean
}

export const Layout: React.FC<Props> = ({longHeader, children}) => {
  const long = longHeader === undefined ? false : longHeader;

  return (
    <div style={{opacity: 1}}>
      <Header long={long}/>
      <Body>
        {children}
      </Body>
      <Footer/>
    </div>
  )
}
