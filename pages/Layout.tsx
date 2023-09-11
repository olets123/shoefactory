import { Main } from "./reusables/Main"

export type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return <Main>{children}</Main>
}
export default Layout
