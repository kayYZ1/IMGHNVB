import { useSelector } from "react-redux"

import EmptyComponent from "../../components/shared/EmptyComponent"

const ImageEditPage = () => {
  const file = useSelector((state: any) => state.data.file)
  console.log(file)
  return (
    <div>
      {file ? file.name : <EmptyComponent />}
    </div>
  )
}

export default ImageEditPage