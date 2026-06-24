import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_TOKEN) {
    return res.status(401).json({ 
      revalidated: false, 
      message: 'Akses ditolak! Token keamanan tidak valid.' 
    });
  }

  if (req.query.data === 'produk') {
    try {
      await res.revalidate('/produk/static');
      
      return res.json({ 
        revalidated: true, 
        message: 'Halaman /produk/static berhasil diperbarui secara aman!' 
      });
    } catch (err) {
      return res.status(500).send('Terjadi kesalahan saat melakukan revalidasi');
    }
  }

  return res.json({ 
    revalidated: false, 
    message: 'Gagal! Harap tentukan parameter data yang valid.' 
  });
}