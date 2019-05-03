import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const TabsTabs = styled.div `
//   border-bottom: 1px solid lightgrey;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   width: 100%;
//   height: 47px;
//   background-color: #fff;

//   @media (min-width: 1280px) {
//       width: 1280px;
//   }
// `

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            props.tabs.map((tab,i) =>(
              <Tab  tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} key={i} />
            ))
            } 
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes={
  tab:PropTypes.array,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
}
export default Tabs;
