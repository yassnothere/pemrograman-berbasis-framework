import { render } from "@testing-library/react"
import AppShell from "@/components/layouts/AppShell"

jest.mock("next/router", () => ({
  useRouter: () => ({ pathname: "/", push: jest.fn(), query: {} })
}))
jest.mock("next-auth/react", () => ({
  useSession: () => ({ data: null }),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

describe("AppShell Component", () => {
  it("renders correctly", () => {
    const { container } = render(<AppShell><p>Test</p></AppShell>)
    expect(container).toMatchSnapshot()
  })
})
