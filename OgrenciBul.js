/**
 * 
 */

const ogrenciNumaralari=
[
	2001010436,2001010456,2101010476,2101010476,23010122,
	23010124,23010125,23010126,23010127,23010128,
	23010129,23010130,23010131,23010132,23010133,
	23010134,23010135,23010136,23010137,23010138,
	23010139,23010140,23010141,23010142,23010143,
	23010144,23010145,23010146
];
const ogrenciAdlari=["Gamze","Zeynep","Aleyna","Sena","Fatih",
	"Ali","Halit","Barış","Boran","Tuana",
	"Ecem","Özgün","Melike","Dilanur","Yağmur",
	"Simay","Sema","Rabia","Ece","Esma",
	"Mahmut","Ahmet","İbrahim","Yusuf","Asım",
	"Mehmet","Ayşe","Hatice"];
var ogrenciSirasi;
function sayfaYukle()
{
	//alert("Sayfa yükleniyor...");
	var minOgrenciNo=Math.min(...ogrenciNumaralari);
	var maxOgrenciNo=Math.max(...ogrenciNumaralari);
	 ogrenciSirasi=ogrenciNumaralari.length;
	document.getElementById("input-1").setAttribute("min",minOgrenciNo);
	document.getElementById("input-1").setAttribute("max",maxOgrenciNo);
	
	document.getElementById("input-2").setAttribute("min",1);
	document.getElementById("input-2").setAttribute("min",ogrenciSirasi);
	console.log("Öğrenci sayınız: " + ogrenciSirasi);
	
}

function numaradanBul()
{
	var bulunacakOgrenciNo= ~~document.getElementById("input-1").value;
	var ogrenciSirasi=ogrenciNumaralari.indexOf(bulunacakOgrenciNo);
	var spanNesnesi=document.getElementById("span-1");
	spanNesnesi.innerHTML=bulunacakOgrenciNo;
	if(ogrenciSirasi==-1)
	{
		spanNesnesi.innerHTML += bulunacakOgrenciNo + " bulunamadı.";
	}
	else
	spanNesnesi.innerHTML += ", " + ++ogrenciSirasi + ".Sırada " + ogrenciAdlari[--ogrenciSirasi];

}



function siradanBul()
{
	var bulunacakOgrenciSirasi= ~~document.getElementById("input-2").value;
	var spanNesnesi=document.getElementById("span-2");
	spanNesnesi.innerHTML=bulunacakOgrenciSirasi;
	if((bulunacakOgrenciSirasi > ogrenciSirasi) || (bulunacakOgrenciSirasi<1))
	{
		spanNesnesi.innerHTML=bulunacakOgrenciSirasi + " sıralı öğrenci mevcut değildir.";
		
	}
	else
	{
		var ogrenciNumarasi=ogrenciNumaralari[bulunacakOgrenciSirasi-1];
		var ogrenciAdi= ogrenciAdlari[bulunacakOgrenciSirasi-1];
		
		spanNesnesi.innerHTML += "-) " + ogrenciNumarasi;
		spanNesnesi.innerHTML += ", " + ogrenciAdi;
	}
	
}




