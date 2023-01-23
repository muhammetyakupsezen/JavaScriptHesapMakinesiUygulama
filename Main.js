// JavaScript source code

var TxtSonuc = document.getElementById('TxtSonuc');
var SeciliIslemTipi = '';
var IlkSayi = 0;

function RakamEkle(Rakam) {
    if (Rakam == '0' && TxtSonuc.value == '0') {
        return;
    }

    if (Rakam == ',') {
        if (IcindeVarMi(Rakam, TxtSonuc.value)) {
            return;
        }  
        else if (Rakam == ',' && TxtSonuc.value == '') {
            TxtSonuc.value = '0,';
            return;
        }
    }
    if (Rakam !='0' && TxtSonuc.value == '0' && TxtSonuc.value != ',') {

        TxtSonuc.value = Rakam;
        return;
    }
  

    TxtSonuc.value += Rakam;
}



function Sil() {

    TxtSonuc.value = ""; 

}


function IcindeVarMi(NeVarMi, Nerede) {
    var don = false;

    var Index = Nerede.indexOf(NeVarMi);

    if (Index > -1) {
        don = true;
    }

    return don;



    

}

function IslemSec(IslemTipi) {
    SeciliIslemTipi = IslemTipi;
    IlkSayi = parseFloat(TxtSonuc.value);
    Sil();
}


function SonucHesap() {

    var Sonuc = 0;
    var IkinciSayi = parseFloat(TxtSonuc.value);

    if (SeciliIslemTipi === '+') {
        Sonuc = IlkSayi + IkinciSayi;
    }
    else if (SeciliIslemTipi === '-') {
        Sonuc = IlkSayi - IkinciSayi;
    }
    else if (SeciliIslemTipi === '*') {
        Sonuc = IlkSayi * IkinciSayi;
    }
    else if (SeciliIslemTipi === '/') {
        Sonuc = IlkSayi / IkinciSayi;
    }

    TxtSonuc.value = Sonuc + '';

}