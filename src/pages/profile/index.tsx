import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Halaman Profile</h1>
      <h1>Selamat Datang Diaz</h1>
      {session ? (
        <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          <p><strong>Nama Lengkap:</strong> {session.user?.fullname}</p>
          <p><strong>Email:</strong> {session.user?.email}</p>
        </div>
      ) : (
        <p>Memuat data...</p>
      )}
    </div>
  );
};

export default ProfilePage;