import location1 from '../images/location1.png'
import location2 from '../images/location2.jpg'
import location3 from '../images/location3.jpg'
import location4 from '../images/location4.jpg'
import location5 from '../images/location5.jpg'

const locations: { img: string, name: string, city: string, state: string, map: string }[] = [
  {
    "img": location1,
    "name": "Centro Histórico de Ouro Preto",
    "city": "Ouro Preto",
    "state": "Minas Gerais",
    "map": "https://www.google.com/maps/place/Ouro+Preto,+State+of+Minas+Gerais,+35400-000/@-20.3911895,-43.5795878,12435m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa40b1d2c57b55b:0xd984d1131d83d5fc!8m2!3d-20.402211!4d-43.5105574!16zL20vMDF0bGR5!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    "img": location2,
    "name": "Praça da Liberdade",
    "city": "Belo Horizonte",
    "state": "Minas Gerais",
    "map": "https://www.google.com/maps?rlz=1C1AJCO_pt-PTBR1198BR1198&gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYsQMYgAQyDQgAEAAY4wIYsQMYgAQyEAgBEC4YrwEYxwEYsQMYgAQyBwgCEAAYgAQyDAgDEAAYFBiHAhiABDINCAQQLhivARjHARiABDIHCAUQABiABDIHCAYQABiABDIGCAcQRRg80gEIMzI4NmowajmoAgawAgHxBfCy-xmYy8T7&um=1&ie=UTF-8&fb=1&gl=br&sa=X&geocode=KftGYzPcmaYAMStyi9Eppdds&daddr=Pra%C3%A7a+da+Liberdade,+s/n+-+Funcion%C3%A1rios,+Belo+Horizonte+-+MG,+30140-010"
  },
  {
    "img": location3,
    "name": "Cataratas do Iguaçu",
    "city": "Foz do Iguaçu",
    "state": "Paraná",
    "map": "https://www.google.com/maps/place/Iguazu+Falls/@-25.695259,-55.0470381,95634m/data=!3m1!1e3!4m10!1m2!2m1!1sVisit+Igua%C3%A7u+Falls,+Foz+do+Igua%C3%A7u,+Brazil!3m6!1s0x94f6ea0ca3aa1b6d:0x917b75179c5e987e!8m2!3d-25.695259!4d-54.4366662!15sCitWaXNpdCBJZ3Vhw6d1IEZhbGxzLCBGb3ogZG8gSWd1YcOndSwgQnJhemlsWisiKXZpc2l0IGlndWHDp3UgZmFsbHMgZm96IGRvIGlndWHDp3UgYnJhemlskgEPbmF0dXJlX3ByZXNlcnZlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJ5TUV4UGNEWjNSUkFC4AEA-gEECAAQMg!16zL20vMGN5Nms!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    "img": location4,
    "name": "Cristo Redentor",
    "city": "Rio de Janeiro",
    "state": "Rio de Janeiro",
    "map": "https://www.google.com/maps/place/Christ+the+Redeemer/@-22.951911,-43.2130621,763m/data=!3m2!1e3!4b1!4m6!3m5!1s0x997fd5984aa13f:0x9dc984d7019502de!8m2!3d-22.951916!4d-43.2104872!16zL20vMDNneXR3!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    "img": location5,
    "name": "Bondinho Pão de Açúcar",
    "city": "Rio de Janeiro",
    "state": "Rio de Janeiro",
    "map": "https://www.google.com/maps/place/Sugar+Loaf+cable+car/@-22.9553503,-43.1694723,763m/data=!3m2!1e3!4b1!4m6!3m5!1s0x99801a50c13d45:0x5f6d802b21bb00d5!8m2!3d-22.9557706!4d-43.1669827!16s%2Fm%2F011ldccw!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyMC4wIKXMDSoASAFQAw%3D%3D"
  }
];

export default locations