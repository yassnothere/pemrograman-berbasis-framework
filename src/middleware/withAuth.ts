import { getToken } from "next-auth/jwt";
import { 
  NextFetchEvent, 
  NextMiddleware, 
  NextRequest, 
  NextResponse 
} from "next/server";

const hanyaAdmin = ["/admin"];
const hanyaEditor = ["/editor"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token) {
        // Membuat URL login
        const Url = new URL("/auth/login", req.url);
        
        // Menambahkan parameter callbackUrl agar setelah login kembali ke halaman ini
        Url.searchParams.set("callbackUrl", encodeURI(req.url));
        
        return NextResponse.redirect(Url);
      }

      if (token.role !== "admin" && hanyaAdmin.includes(pathname)) {
        return NextResponse.redirect(new URL("/?status=unauthorized_admin", req.url));
      }

      if (token.role !== "admin" && token.role !== "editor" && hanyaEditor.includes(pathname)) {
        return NextResponse.redirect(new URL("/?status=unauthorized_editor", req.url));
      }
    }
    
    // Melanjutkan ke middleware berikutnya jika sudah terautentikasi
    return middleware(req, next);
  };
}