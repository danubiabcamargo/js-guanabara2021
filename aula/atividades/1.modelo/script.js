function carregar() {
  let msg = window.document.getElementById('msg')
  let img = window.document.getElementById('imagem')
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora <12){
    img.src='imagens/manha.jpg';
    document.body.style.background = '#d99c5c';
  } else if (hora >=12 && hora <=18){
    img.src='imagens/tarde.jpg'
    document.body.style.background = '#CDBFB3';
  }else{
    img.src='imagens/noite.jpg'
    document.body.style.background = '#17242F';
  }
}
