let urun1={
    isim: "Acer",
    kategori: "Teknoloji",
    fiyat: 5000
}
let urun2={
    isim: "Acer",
    kategori: "Teknoloji",
    fiyat: 8000
}
let urun3={
    isim: "Lenovo",
    kategori: "Teknoloji",
    fiyat: 1000
}
let urun4={
    isim: "Lenovo",
    kategori: "Teknoloji",
    fiyat: 6000
}
let urun5={
    isim: "Asus",
    kategori: "Teknoloji",
    fiyat: 7500
}

let urunler=[urun1,urun2,urun3,urun4,urun5]
let FilteredUrunler=[]
let kullaniciUrunisim=window.prompt("Bir ürün giriniz:")

FiltreliUrunlerDoldur(urunler)
FiltereliUrunleriYazdir(FilteredUrunler)

function FiltreliUrunlerDoldur(urunler){
    urunler.forEach(function(urun) {
        if(urun.isim.toUpperCase().includes(kullaniciUrunisim.toUpperCase(),0)){
            FilteredUrunler.push(urun)
        } 
    })  
}

function FiltereliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("-------------------")
        console.log("|", urun.isim,"|",urun.fiyat,"|",urun.kategori)
        console.log("-------------------")
    })
}