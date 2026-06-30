import { render } from "@testing-library/react"
import HalamanLogin from "@/pages/auth/login"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      query: {},
      push: jest.fn(),
    }
  },
}))

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}))

describe("Login Page", () => {
  it("renders correctly", () => {
    const page = render(<HalamanLogin />)
    expect(page).toMatchSnapshot()
  })
})
