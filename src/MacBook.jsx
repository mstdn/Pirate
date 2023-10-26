import { useGLTF } from '@react-three/drei'

export function MacBook(props) {
    const { scene } = useGLTF('./assets/models/MacBook.gltf')
    return <>
        <primitive object={scene} {...props} />
    </>
  }