import { render } from "@testing-library/react"
import ProductCard from "@/components/ProductCard"

describe("ProductCard Component", () => {
  it("renders correctly", () => {
    const { container } = render(<ProductCard />)
    expect(container).toMatchSnapshot()
  })
})
