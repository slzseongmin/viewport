import { Engine, Scene } from "react-babylonjs";
import { Vector3 } from "@babylonjs/core";

const NextBabylon = () => {

  return (
    <Engine
      canvasId="sample-canvas"
      canvasStyle={{ display: "block", width: "100%" }}
    >
      <Scene>
        <freeCamera
          name="camera1"
          position={new Vector3(0, 10, 30)}
          // @ts-ignore - doesn't seem like this is working...
          // setTarget & getTarget exist in TargetCamera, but
          // this property doesn't seem to be setting properly
          // target={new Vector3(0, 10, 0)}
          rotation={new Vector3(0, Math.PI, 0)}
        />
        <hemisphericLight
          name="light1"
          intensity={0.7}
          direction={Vector3.Up()}
        />
        {/* 모델 컴포넌트 활용해서 3d model 가져오기 */}
        <model
          rootUrl="/Avocado/glTF/"
          sceneFilename="Avocado.gltf"
          scaling={new Vector3(30, 30, 30)}
          position={new Vector3(0, 5, 0)}
        />
        <model
          rootUrl="/BoomBox/glTF/"
          sceneFilename="BoomBox.gltf"
          scaling={new Vector3(100, 100, 100)}
          position={new Vector3(2, 5, 0)}
        />
        <model
          rootUrl="/ToyCar/glTF/"
          sceneFilename="ToyCar.gltf"
          scaling={new Vector3(50, 50, 50)}
          position={new Vector3(-2, 5, 0)}
        />

        <sphere
          name="sphere1"
          diameter={2}
          segments={16}
          position={new Vector3(0, 3, 0)}
        />
        <ground
          name="ground1"
          width={6}
          height={6}
          subdivisions={2}
          position={new Vector3(0, 2, 0)}
        />
      </Scene>
    </Engine>
  );
};

export default NextBabylon;
