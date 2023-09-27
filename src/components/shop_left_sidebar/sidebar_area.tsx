'use client'
import React, { useState } from 'react';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  ChakraProvider
} from '@chakra-ui/react'
import RangeSliderr from './slider';


const Sidebar_area = () => {


  const [val, setVal] = useState([0, 100])

  return (
<div className="col-lg-3 order-lg-first col-md-12 order-md-last mb-md-60px mb-lm-60px">
  <div className="shop-sidebar-wrap">
    {/* Sidebar single item */}
    <div className="sidebar-widget">
      <div className="main-heading">
        <h3 className="sidebar-title">Category</h3>
      </div>
      <div className="sidebar-widget-category">
        <ul>
          <li>
            <a href="#" className="selected">
              All <span>(4)</span>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="">
              Accesssories <span>(3)</span>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="">
              Box <span>(5)</span>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="">
              chair <span>(2)</span>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="">
              Deco <span>(6)</span>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="">
              Furniture <span>(4)</span>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="">
              Glass <span>(1)</span>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="">
              Sofa <span>(3)</span>{" "}
            </a>
          </li>
          <li>
            <a href="#" className="">
              Table <span>(4)</span>{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* Sidebar single item */}
    <div className="sidebar-widget-group">
      <h3 className="sidebar-title">Filter By</h3>
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Price</h4>
        <div className="price-filter">
          <RangeSliderr />
        </div>
      </div>
      {/* Sidebar single item */}
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title mt-5">Size</h4>
        <div className="sidebar-widget-list">
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a href="#">
                  Large <span>(4)</span>{" "}
                </a>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue="" />{" "}
                <a href="#">
                  Medium
                  <span>(4)</span>
                </a>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue="" />{" "}
                <a href="#">
                  Small <span>(4)</span>
                </a>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue="" />{" "}
                <a href="#">
                  Extra Large<span>(4)</span>{" "}
                </a>
                <span className="checkmark" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Sidebar single item */}
      <div className="sidebar-widget no-cba">
        <h4 className="pro-sidebar-title">Colour</h4>
        <div className="sidebar-widget-list">
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a href="#">
                  Grey<span>(2)</span>{" "}
                </a>
                <span className="checkmark grey" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue="" />{" "}
                <a href="#">
                  White<span>(4)</span>
                </a>
                <span className="checkmark white" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue="" />{" "}
                <a href="#">
                  Black<span>(4)</span>
                </a>
                <span className="checkmark black" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue="" />{" "}
                <a href="#">
                  Camel<span>(4)</span>
                </a>
                <span className="checkmark camel" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Sidebar single item */}
      <div className="sidebar-widget">
        <h4 className="pro-sidebar-title">Brand</h4>
        <div className="sidebar-widget-list">
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" />{" "}
                <a href="#">
                  Studio Design<span>(10)</span>
                </a>
                <span className="checkmark" />
              </div>
            </li>
            <li>
              <div className="sidebar-widget-list-left">
                <input type="checkbox" defaultValue="" />{" "}
                <a href="#">
                  Graphic Corner<span>(7)</span>
                </a>
                <span className="checkmark" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Sidebar single item */}
    <div className="sidebar-widget tag">
      <div className="main-heading">
        <h3 className="sidebar-title mt-3">Tags</h3>
      </div>
      <div className="sidebar-widget-tag">
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Chair</a>
          </li>
          <li>
            <a href="#">Decoration</a>
          </li>
          <li>
            <a href="#">Furniture</a>
          </li>
          <li>
            <a href="#">Sofa</a>
          </li>
          <li>
            <a href="#">Table</a>
          </li>
        </ul>
      </div>
    </div>
    {/* Sidebar single item */}
  </div>
</div>
  );
};

export default Sidebar_area;