<script>
  function kirimKeWA(event) 
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const pesan = document.getElementById("pesan").value;

    const nomorWA = "+6288210714192"; // nomor WA lu

    const text = `Halo Rizal,

Saya ${nama} ingin memberikan masukan:
${pesan}`;

    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
    
</script>
