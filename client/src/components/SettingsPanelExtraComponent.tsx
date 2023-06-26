import { Button } from "antd"

import AccountDeleteModal from "./modals/AccountDeleteModal"

const SettingsPanelExtraComponent = () => {
  return (
    <div>
      <Button type="primary">Edit</Button>
      <AccountDeleteModal />
    </div>
  )
}

export default SettingsPanelExtraComponent