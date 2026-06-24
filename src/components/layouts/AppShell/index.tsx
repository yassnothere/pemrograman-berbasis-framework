// src/components/layouts/AppShell.tsx
import Navbar from '@/components/layouts/Navbar';
import { useRouter } from 'next/router';

type AppShellProps = {
  children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter(); 

  const disableNavbar = ["/auth/login", "/auth/register", "/404"];

  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      
      <div className="content">{children}</div>
      
      <footer style={{ marginTop: '20px', padding: '10px', borderTop: '1px solid #ccc', textAlign: 'center' }}>
        <p>&copy; 2026 - Praktikum Pemrograman Framework - Achmad Diaz</p>
      </footer>
    </main>
  );
};

export default AppShell;