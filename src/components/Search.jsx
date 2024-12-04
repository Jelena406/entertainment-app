import React, {useEffect, useState} from 'react';
let timeout;
export default function Search({setData, placeholder}) {
  const [title, setTitle] = useState('');
  const getData = async (e) => {
    clearTimeout(timeout);
    setTitle(e.target.value);
    if (e.target.value.length >= 3) {
      timeout = setTimeout(() => {
        setData(e.target.value);
      }, 300);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
      //koristimo kako bismo ponistili tajmer, jer kad na jednoj stranici
      //pretrazujemo i predjemo na sledecu onda ce se ucitati sadrzaj tj rezultat
      //koji smo pretrazivali na prethodnoj stranici
    };
  }, []);
  return (
    <div className="search">
      <img className="search-icon" src="./assets/icon-search.svg" alt="" />
      <input type="text" onChange={getData} placeholder={placeholder} value={title} />
    </div>
  );
}
// sadrzaj u input polju za searc se menja
//search ima input polje, state koji se zove title, i na change ce ispaljivati
//api poziv pod sl.usloivma:
//ako smo na home page saljemo api ka getall s tim sto u parametru saljemo title
//ako smo na str za filmove saljemo title sa kategorijom filmovi
//filmove, serije primamo kroz props

//setTimeout ce cekati da prodje vrijeme i onda izvrsava funkciju
//setInterval ce izvrsavati funkciju sve vrijeme dok mu ne kazemo da stane
// postoje 2 ncina da eksplicitno zaustavimo setInterval, clearInterval i refresh browsera
