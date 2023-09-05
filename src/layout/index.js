import FooterCom from "./Footer"
import HeaderCom from "./Header"

const LayoutIndex = ({children}) => {
  return (
    <>
      <HeaderCom />
        {children}
      <FooterCom />
    </>
  )
}

export default LayoutIndex