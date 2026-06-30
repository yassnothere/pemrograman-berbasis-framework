import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 data-testid="title">About Page</h1>
      <hr />
      <p><strong>Nama Mahasiswa:</strong> Achmad Diaz Hikmal Baihaqi</p>
      <p><strong>NIM:</strong> 244107023003</p>
      <p><strong>Program Studi:</strong> D4 Teknik Informatika</p>
    </div>
  );
};

export default About;