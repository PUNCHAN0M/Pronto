import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
} from "@react-three/drei";
import Earth from "../public/Earth.jsx";
import { Suspense } from "react";
import "./MenuModel.css";
import { useNavigate } from "react-router-dom";

const MenuModel = () => {
  let navigate = useNavigate();
  const handleScanBtn = () => {
    console.log(`go to scan page`);
    navigate("/camera");
  };
  const handleInfomationBtn = () => {
    console.log(`on click `);
    return;
  };
  return (
    <div className="background-container-model">
      <button className="scan-btn" onClick={handleScanBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_1"
          data-name="Layer 1"
          viewBox="0 0 24 24"
        >
          <path d="m8.5,4h-2c-1.378,0-2.5,1.122-2.5,2.5v2c0,1.378,1.122,2.5,2.5,2.5h2c1.378,0,2.5-1.122,2.5-2.5v-2c0-1.378-1.122-2.5-2.5-2.5Zm.5,4.5c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5h2c.276,0,.5.224.5.5v2Zm6.5,2.5h2c1.378,0,2.5-1.122,2.5-2.5v-2c0-1.378-1.122-2.5-2.5-2.5h-2c-1.378,0-2.5,1.122-2.5,2.5v2c0,1.378,1.122,2.5,2.5,2.5Zm-.5-4.5c0-.276.224-.5.5-.5h2c.276,0,.5.224.5.5v2c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5v-2Zm-6.5,6.5h-2c-1.378,0-2.5,1.122-2.5,2.5v2c0,1.378,1.122,2.5,2.5,2.5h2c1.378,0,2.5-1.122,2.5-2.5v-2c0-1.378-1.122-2.5-2.5-2.5Zm.5,4.5c0,.276-.224.5-.5.5h-2c-.276,0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5h2c.276,0,.5.224.5.5v2Zm-1,5.5c0,.552-.448,1-1,1h-2c-2.757,0-5-2.243-5-5v-2c0-.552.448-1,1-1s1,.448,1,1v2c0,1.654,1.346,3,3,3h2c.552,0,1,.448,1,1Zm16-6v2c0,2.757-2.243,5-5,5h-2c-.552,0-1-.448-1-1s.448-1,1-1h2c1.654,0,3-1.346,3-3v-2c0-.552.448-1,1-1s1,.448,1,1Zm0-12v2c0,.552-.448,1-1,1s-1-.448-1-1v-2c0-1.654-1.346-3-3-3h-2c-.552,0-1-.448-1-1s.448-1,1-1h2c2.757,0,5,2.243,5,5ZM0,7v-2C0,2.243,2.243,0,5,0h2c.552,0,1,.448,1,1s-.448,1-1,1h-2c-1.654,0-3,1.346-3,3v2c0,.552-.448,1-1,1s-1-.448-1-1Zm16,11.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm2.5-5.5c.828,0,1.5.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5.672-1.5,1.5-1.5Zm-5.5,1.5c0-.828.672-1.5,1.5-1.5s1.5.672,1.5,1.5-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5Z" />
        </svg>
      </button>
      <div className="logo-model-container">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="logo-model"
        >
          <image
            id="image0_46_31"
            className=""
            xlinkHref="data:image/png;base64,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aWedV1cA3dM8PfvuD3zAaJSENPSZL6wqS0/9Z7/DC3TK0888V4448aPlS1/5et3DqAhpCy7+8rXlwL84tTy8fkPdAzB1fr7ukbL4faeUq67z4wuTQUhb8o3b7iq/teSE8snzryhPPv1M3QsweTY88VT5+GcvKW896C89zp1EY2MLl/i0TMu2nTennHTcYeXEY99Tdl2wQ907vey891Fl3cPr6yqz0/bzywO3rqorYFD3rn2wnPelr5bzL7t6IqZMLiEdscV7/245/r0Hl732/PUyf+6cicjO32ZO/df+ElKYGo8+9kR5dMPjZf2GJ8tt3/txueTL1/l+6BQTUgAIeI8UAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAASEFAACQgoAASEFgICQAkBASAEgIKQAEBBSAAgIKQAEhBQAAkIKAAEhBYCAkAJAQEgBICCkABAQUgAICCkABIQUAAJCCgABIQWAgJACQEBIASAgpAAQEFIACAgpAAytlP8GJHc771pbM7wAAAAASUVORK5CYII="
          />
        </svg>
        <div className="logo-model-title">Pronto</div>
      </div>
      <div className="model-container">
        <Canvas className="canvas-container">
          <Suspense fallback={null}>
            <ambientLight />
            <OrbitControls
              enableZoom={false}
              enableDamping={true} // Enable damping effect
              dampingFactor={0.05} // Smoothness of the rotation
              rotateSpeed={0.5} // Slows down the rotation
            />
            <Earth />
            {/* <ContactShadows position={[0,-2,0]} opacity={1} scale={10} /> */}
          </Suspense>
        </Canvas>
      </div>
      <div>
        <div>Name</div>
        <div></div>
      </div>

      <div className="model-menu-container">
        <div className="menu-container">
          <div className="menu-item-container">
            <button className="menu-icon" onClick={()=>{handleInfomationBtn()}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="10vh"
                viewBox="0 -960 960 960"
                fill="#838383"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z" />
              </svg>
            </button>
            <div className="menu-title">Information</div>
          </div>
          <div className="menu-item-container">
            <button className="menu-icon" onClick={()=>{handleInfomationBtn()}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="10vh"
                viewBox="0 -960 960 960"
                fill="#838383"
              >
                <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </button>
            <div className="menu-title">Materals</div>
          </div>
          <div className="menu-item-container">
            <button className="menu-icon" onClick={()=>{handleInfomationBtn()}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="10vh"
                viewBox="0 -960 960 960"
                fill="#838383"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
              </svg>
            </button>
            <div className="menu-title">Expired date</div>
          </div>
          <div className="menu-item-container">
            <button className="menu-icon" onClick={()=>{handleInfomationBtn()}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="10vh"
                viewBox="0 -960 960 960"
                fill="#838383"
              >
                <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
              </svg>
            </button>
            <div className="menu-title">Time period</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModel;
