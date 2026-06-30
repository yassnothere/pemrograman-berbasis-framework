import { render } from "@testing-library/react"
import Navbar from "@/components/layouts/Navbar"

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => ({ data: null })),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

describe("Navbar Component", () => {
  it("renders correctly", () => {
    const { container } = render(<Navbar />)
    expect(container).toMatchSnapshot()
  })
})
