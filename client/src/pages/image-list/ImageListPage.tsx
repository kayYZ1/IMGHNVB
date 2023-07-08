import { Divider } from "antd"

import ImageTableComponent from "../../components/ImageTableComponent"

import "./ImageListPage.css"

const ImageListPage = () => {
  return (
    <div>
      <h3>List of your edited images</h3>
      <Divider></Divider>
      <ImageTableComponent />
    </div>
  ) 
}

export default ImageListPage