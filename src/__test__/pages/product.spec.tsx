import { render, screen } from "@testing-library/react"
import ProductPage from "@/pages/produk"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/product",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

describe("Product Page", () => {
  it("renders product page correctly", () => {
    const page = render(<ProductPage />)
    expect(screen.getByTestId("title").textContent?.trim()).toBe("Halaman Produk")
    expect(page).toMatchSnapshot()
  })
})
