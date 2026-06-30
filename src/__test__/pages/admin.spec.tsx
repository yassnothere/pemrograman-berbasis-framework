import { render } from "@testing-library/react"
import HalamanAdmin from "@/pages/admin"

describe("Admin Page", () => {
  it("renders correctly", () => {
    const page = render(<HalamanAdmin />)
    expect(page).toMatchSnapshot()
  })
})
