import Navbar from '@/components/layouts/Navbar';

type AppShellProps = {
  children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      <div className="content">{children}</div>
      <footer style={{ marginTop: '20px', padding: '10px', borderTop: '1px solid #ccc', textAlign: 'center' }}>
        <p>&copy; 2026 - Praktikum Pemrograman Framework - Achmad Diaz</p>
      </footer>
    </main>
  );
};

export default AppShell;