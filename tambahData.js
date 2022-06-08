// Fitur Tambah Datal

 
let arr = ["NOUVAL AJI SATRIO", "ARDI AHMAD SIREGAR", "NANDA RAMADHAN", "SANDHIKA PRATAMA GALIH"];
let arrUmur = [];
 
 // display none
 function tambahData() {
   let tambahData = document.querySelector(".tambahData").classList.toggle("d-none");
  };
      
  let batalTambah = document.querySelector(".batalTambah");
      batalTambah.onclick = function() 
     {
         batalTambah.parentElement.parentElement.classList.toggle("d-none");
     }
     
     
 // menambah element list kedalam UL
  function tambahElement() {
     // DEKLARASI VARIABLE
      let acak = arr.length + 2;
      acak = `li${acak}`
      
      let classLis = `${acak} list-group-item bg-info text-white h-auto`;
      
         
      let classButton = "btn btn-close float-end d-none";
         
      let classNamaLengkap = "lead text-uppercase fw-bold";
        
      let classUmur = "mx-5 fw-light";
      
      let list = document.createElement("li");
      list.className = classLis;
      document.getElementById("identitasKandidat").appendChild(list);
      
      let buttonList = document.createElement("button");
     
      
     buttonList.addEventListener("click", () => {
      hapusList(`.${acak}`);
        
     });
     
      buttonList.className = classButton;
      
      
      let namaLengkap = document.createElement("span");
      namaLengkap.className = classNamaLengkap;
      namaLengkap.innerHTML = arr[arr.length-1];
      
      let umur = document.createElement("span");
      umur.className = classUmur;
      umur.innerHTML = `${arrUmur[arrUmur
      .length-1]} Tahun `;
      
      
      
      // memasukkan
      list.appendChild(buttonList);
      list.appendChild(namaLengkap);
      list.appendChild(document.createElement("br"));
      list.appendChild(umur);
      
      
  };
     // AKHIR FUNCTION TAMBAH ELEMENT
     
     
     
    // FITUR CEKLIS TAMBAH
function ceklisTambah() {
   let namaLengkap = document.getElementById("namaLengkap");
      if(namaLengkap.classList.contains("gagal") === true)
      {
         return alert("Maaf nama sudah ada");
      }
      
   let inputUmur = document.querySelector(".inputUmur");
   if(inputUmur.value.length === 0) {
      return alert("Maaf anda tidak memasukkan umur");
   }
   
        
   let x = namaLengkap.value;
    x = x.trim().toUpperCase()
       
   let teks = `Apakah anda yakin ingin menambahkan ${x} ?`;
   let konfirm = confirm(teks);
   if(konfirm === true) {
      arr.push(x);
         namaLengkap.parentElement.parentElement.parentElement.parentElement.classList.toggle("d-none");
      arrUmur.push(inputUmur.value);
         
         tambahElement();
      }
      
      
      
     
      
  } // AKHIR FUNCTION CEKLIS TAMBAH
 
         
         
   // LOGIKA CEK USERNAME
   let namaLengkap = document.getElementById("namaLengkap");
     
   namaLengkap.addEventListener("keyup", function() {
         
      let cekNama = document.querySelector(".cekNama");
       
      for(let j = 0; j < arr.length; j++ ) {
         if (namaLengkap.value === arr[j]) {
            cekNama.classList.remove("text-info");
            cekNama.classList.add("text-danger");
            cekNama.innerHTML = "Nama sudah ada ×";
            cekNama.classList.add("gagal");
            break;
          } else if (namaLengkap.value.length === 0)  {
            cekNama.innerHTML = "";
          } else {
            cekNama.classList.remove("gagal");
            cekNama.classList.remove("text-danger");
            cekNama.classList.add("text-info");
               
            cekNama.innerHTML = "Nama Tersedia ✓";
         } // AKHIR KONDISI 
            
            
         } // AKHIR LOOPING
      }) //  AKHIR ADD EVENT LISTENER
      
 



let list = document.querySelector("#identitasKandidat").children;
      
   function hapusData() {
      for(let i = 0; i < list.length; i++) {
         let tombol = list[i].children[0];
         tombol.classList.toggle("d-none");
      }
         
   };
      // AKHIR TOMBOL HAPUS DATA
      
function hapusList(x) {
   let list = document.querySelector(x);
      list.remove();
   }
      
       // AKHIR HAPUS LIST
    
