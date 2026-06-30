import { render } from "@testing-library/react"
import RegisterPage from "@/pages/auth/register"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

describe("Register Page", () => {
  it("renders correctly", () => {
    const page = render(<RegisterPage />)
    expect(page).toMatchSnapshot()
  })
})
