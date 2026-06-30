import { render } from "@testing-library/react"
import Page404 from "@/pages/404"
import Home from "@/pages/index"
import Editor from "@/pages/editor"
import Profile from "@/pages/profile"
import Setting from "@/pages/setting/app"
import User from "@/pages/user"
import UserPassword from "@/pages/user/password"

jest.mock("next/router", () => ({
  useRouter: () => ({ push: jest.fn(), query: {} })
}))
jest.mock("next-auth/react", () => ({
  useSession: () => ({ data: null }),
  signIn: jest.fn(),
}))

describe("Auto tests", () => {
  it("renders 404", () => { render(<Page404 />) })
  it("renders Home", () => { render(<Home />) })
  it("renders Editor", () => { render(<Editor />) })
  it("renders Profile", () => { render(<Profile />) })
  it("renders Setting", () => { render(<Setting />) })
  it("renders User", () => { render(<User />) })
  it("renders User Password", () => { render(<UserPassword />) })
})
