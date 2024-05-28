const MyList = () => {
  const fruits = [
    {
      image: "./apel.jpg",
      id: 1,
      nama: "apel",
      warna: "merah",
      harga: 10000
    },
    {
      image: "./nanas.jpg",
      id: 2,
      nama: "nanas",
      warna: "kuning",
      harga: 15000
    },
    {
      image: "./pisang.jpg",
      id: 3,
      nama: "pisang",
      warna: "kuning",
      harga: 12000
    },
    {
      image: "./jeruk.jpeg",
      id: 4,
      nama: "jeruk",
      warna: "oranye",
      harga: 8000
    },
    {
      image: "./anggur.jpg",
      id: 5,
      nama: "anggur",
      warna: "ungu",
      harga: 20000
    }
  ];

  return (
    <div className="my-list">
      <h2>Daftar Buah</h2>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>
            <img src={fruit.image} alt={fruit.nama} /> - Nama: {fruit.nama} - Warna: {fruit.warna} - Harga: Rp{fruit.harga}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyList;
